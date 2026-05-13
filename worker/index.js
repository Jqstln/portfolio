const ALLOWED_ORIGINS = ["https://justinnn.dev", "http://localhost:3000"];

export default {
	async fetch(request, env) {
		const origin = request.headers.get("Origin") ?? "";
		const corsHeaders = {
			"Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin)
				? origin
				: ALLOWED_ORIGINS[0],
			"Access-Control-Allow-Methods": "POST, OPTIONS",
			"Access-Control-Allow-Headers": "Content-Type",
		};

		if (request.method === "OPTIONS") {
			return new Response(null, { status: 204, headers: corsHeaders });
		}

		if (request.method !== "POST") {
			return json({ success: false, message: "Method not allowed" }, 405, corsHeaders);
		}

		let body;
		try {
			body = await request.json();
		} catch {
			return json({ success: false, message: "Invalid request body" }, 400, corsHeaders);
		}

		const { name, email, message, turnstileToken } = body;

		if (!name || !email || !message || !turnstileToken) {
			return json({ success: false, message: "Missing required fields" }, 400, corsHeaders);
		}

		// Verify Turnstile token server-side
		const ip =
			request.headers.get("CF-Connecting-IP") ??
			request.headers.get("X-Forwarded-For") ??
			"unknown";

		const verification = await fetch(
			"https://challenges.cloudflare.com/turnstile/v0/siteverify",
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					secret: env.TURNSTILE_SECRET_KEY,
					response: turnstileToken,
					remoteip: ip,
				}),
			},
		);

		const verResult = await verification.json();

		if (!verResult.success) {
			return json(
				{ success: false, message: "Security check failed. Please try again." },
				400,
				corsHeaders,
			);
		}

		// Forward to PHP mailer on DirectAdmin
		let mailerData;
		try {
			const mailerRes = await fetch(env.MAILER_URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${env.MAILER_SECRET}`,
				},
				body: JSON.stringify({ name, email, message }),
			});
			mailerData = await mailerRes.json().catch(() => ({}));

			if (!mailerRes.ok || !mailerData.success) {
				return json(
					{ success: false, message: "Failed to send message. Please try again." },
					500,
					corsHeaders,
				);
			}
		} catch {
			return json(
				{ success: false, message: "Failed to send message. Please try again." },
				500,
				corsHeaders,
			);
		}

		return json({ success: true }, 200, corsHeaders);
	},
};

function json(data, status, corsHeaders) {
	return new Response(JSON.stringify(data), {
		status,
		headers: { "Content-Type": "application/json", ...corsHeaders },
	});
}
