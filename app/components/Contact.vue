<template>
	<section id="contact" class="relative py-32 mx-auto max-w-6xl px-6">
		<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			<div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-75 rounded-full bg-cyan-500/8 blur-[100px]" />
		</div>
		<div class="flex items-center gap-4 mb-16">
			<span class="font-mono text-xs text-cyan-400 tracking-widest uppercase">04 &mdash; Contact</span>
			<div class="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
		</div>
		<div class="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
			
			<div class="lg:col-span-2 space-y-8">
				<div>
					<h2 class="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
						Let's build something together
					</h2>
					<p class="text-gray-400 leading-relaxed text-sm">
						Got a project idea, a question, or just want to say hey? Shoot me a message —
						I read every email and reply personally.
					</p>
				</div>
				<div class="space-y-3">
					<a
						href="mailto:hello@justinnn.dev"
						class="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
					>
						<div class="w-8 h-8 rounded-lg glass-card flex items-center justify-center border border-white/8 group-hover:border-cyan-400/30 transition-colors duration-300">
							<Icon name="lucide:mail" class="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
						</div>
						hello@justinnn.dev
					</a>
					<a
						href="https://github.com/Jqstln"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
					>
						<div class="w-8 h-8 rounded-lg glass-card flex items-center justify-center border border-white/8 group-hover:border-cyan-400/30 transition-colors duration-300">
							<Icon name="simple-icons:github" class="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
						</div>
						github.com/Jqstln
					</a>
					<a
						href="https://www.linkedin.com/in/justinharing/"
						target="_blank"
						rel="noopener noreferrer"
						class="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors duration-300 group"
					>
						<div class="w-8 h-8 rounded-lg glass-card flex items-center justify-center border border-white/8 group-hover:border-cyan-400/30 transition-colors duration-300">
							<Icon name="simple-icons:linkedin" class="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-300" />
						</div>
						justinharing
					</a>
				</div>
				<p class="text-xs font-mono text-gray-600 border-l-2 border-white/10 pl-3">
					Typical response time:<br>
					<span class="text-gray-400">within 24 hours</span>
				</p>
			</div>
			<div class="lg:col-span-3">
				<form
					class="glass-card p-8 flex flex-col gap-4"
					novalidate
					@submit.prevent="submitForm"
				>
					<input
						v-model="honeypot"
						name="botcheck"
						type="text"
						tabindex="-1"
						autocomplete="off"
						aria-hidden="true"
						class="hidden"
					>
					<div class="space-y-1.5">
						<label for="contact-name" class="text-xs font-mono text-gray-500 uppercase tracking-wider">Name</label>
						<input
							id="contact-name"
							v-model.trim="form.name"
							type="text"
							name="name"
							placeholder="Your name"
							required
							:maxlength="NAME_MAX"
							autocomplete="name"
							class="w-full px-4 py-3 rounded-xl bg-white/4 text-white border border-white/10 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-all duration-300 placeholder-gray-600 text-sm"
							:class="{ 'border-red-500/60': fieldErrors.name }"
						>
						<p v-if="fieldErrors.name" class="text-xs text-red-400">{{ fieldErrors.name }}</p>
					</div>
					<div class="space-y-1.5">
						<label for="contact-email" class="text-xs font-mono text-gray-500 uppercase tracking-wider">Email</label>
						<input
							id="contact-email"
							v-model.trim="form.email"
							type="email"
							name="email"
							placeholder="you@example.com"
							required
							:maxlength="EMAIL_MAX"
							autocomplete="email"
							class="w-full px-4 py-3 rounded-xl bg-white/4 text-white border border-white/10 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-500/30 outline-none transition-all duration-300 placeholder-gray-600 text-sm"
							:class="{ 'border-red-500/60': fieldErrors.email }"
						>
						<p v-if="fieldErrors.email" class="text-xs text-red-400">{{ fieldErrors.email }}</p>
					</div>
					<div class="space-y-1.5">
						<div class="flex justify-between items-center">
							<label for="contact-message" class="text-xs font-mono text-gray-500 uppercase tracking-wider">Message</label>
							<span class="text-xs font-mono text-gray-600">{{ form.message.length }}/{{ MESSAGE_MAX }}</span>
						</div>
						<textarea
							id="contact-message"
							v-model="form.message"
							name="message"
							placeholder="What's on your mind?"
							required
							:maxlength="MESSAGE_MAX"
							class="w-full px-4 py-3 rounded-xl bg-white/4 text-white border border-white/10 focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-500/30 outline-none resize-none h-36 transition-all duration-300 placeholder-gray-600 text-sm"
							:class="{ 'border-red-500/60': fieldErrors.message }"
						/>
						<p v-if="fieldErrors.message" class="text-xs text-red-400">{{ fieldErrors.message }}</p>
					</div>
					<div class="flex justify-center">
						<div ref="turnstileContainer" />
					</div>	
					<button
						type="submit"
						:disabled="isDisabled"
						class="relative flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:-translate-y-0.5 transition-all duration-300 text-sm"
					>
						<Icon v-if="status === 'loading'" name="lucide:loader-2" class="w-4 h-4 animate-spin" />
						<Icon v-else-if="status === 'success'" name="lucide:check" class="w-4 h-4" />
						<span>{{ submitLabel }}</span>
					</button>
					<p v-if="cooldown > 0" class="text-center text-xs font-mono text-gray-600">
						Next message in <span class="text-gray-400">{{ cooldown }}s</span>
					</p>
				</form>
				<p
					v-if="result"
					class="mt-4 text-sm text-center font-mono"
					:class="status === 'success' ? 'text-green-400' : 'text-red-400'"
				>
					{{ result }}
				</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface TurnstileInstance {
	render: (container: HTMLElement, options: TurnstileOptions) => string;
	reset: (widgetId: string) => void;
	remove: (widgetId: string) => void;
}

interface TurnstileOptions {
	sitekey: string;
	theme?: "light" | "dark" | "auto";
	callback?: (token: string) => void;
	"error-callback"?: () => void;
	"expired-callback"?: () => void;
}

declare global {
	interface Window {
		turnstile?: TurnstileInstance;
	}
}

interface WorkerResponse {
	success: boolean;
	message?: string;
}

const NAME_MAX = 100;
const EMAIL_MAX = 255;
const MESSAGE_MAX = 2000;
const COOLDOWN_SECONDS = 30;

const config = useRuntimeConfig();

const form = ref({ name: "", email: "", message: "" });
const honeypot = ref("");
const status = ref("");
const result = ref("");
const cooldown = ref(0);
const turnstileToken = ref("");
const turnstileContainer = ref<HTMLElement | null>(null);
const widgetId = ref<string | null>(null);

const fieldErrors = reactive({ name: "", email: "", message: "" });

const isDisabled = computed(
	() => status.value === "loading" || cooldown.value > 0,
);

const submitLabel = computed(() => {
	if (status.value === "loading") return "Sending…";
	if (status.value === "success") return "Sent!";
	if (cooldown.value > 0) return `Wait ${cooldown.value}s`;
	return "Send Message";
});

function renderTurnstile() {
	if (!turnstileContainer.value || !window.turnstile) return;
	widgetId.value = window.turnstile.render(turnstileContainer.value, {
		sitekey: config.public.turnstileSitekey as string,
		theme: "dark",
		callback: (token: string) => { turnstileToken.value = token; },
		"error-callback": () => { turnstileToken.value = ""; },
		"expired-callback": () => { turnstileToken.value = ""; },
	});
}

onMounted(() => {
	if (window.turnstile) {
		renderTurnstile();
	} else {
		const check = setInterval(() => {
			if (window.turnstile) {
				clearInterval(check);
				renderTurnstile();
			}
		}, 100);
		setTimeout(() => clearInterval(check), 10_000);
	}
});

onUnmounted(() => {
	if (widgetId.value) window.turnstile?.remove(widgetId.value);
});

function validateFields(): boolean {
	fieldErrors.name = "";
	fieldErrors.email = "";
	fieldErrors.message = "";
	let valid = true;

	if (!form.value.name) {
		fieldErrors.name = "Name is required.";
		valid = false;
	} else if (form.value.name.length > NAME_MAX) {
		fieldErrors.name = `Name must be ${NAME_MAX} characters or fewer.`;
		valid = false;
	}

	const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!form.value.email) {
		fieldErrors.email = "Email is required.";
		valid = false;
	} else if (!emailRe.test(form.value.email)) {
		fieldErrors.email = "Please enter a valid email address.";
		valid = false;
	} else if (form.value.email.length > EMAIL_MAX) {
		fieldErrors.email = `Email must be ${EMAIL_MAX} characters or fewer.`;
		valid = false;
	}

	if (!form.value.message) {
		fieldErrors.message = "Message is required.";
		valid = false;
	} else if (form.value.message.length > MESSAGE_MAX) {
		fieldErrors.message = `Message must be ${MESSAGE_MAX} characters or fewer.`;
		valid = false;
	}

	return valid;
}

function startCooldown() {
	cooldown.value = COOLDOWN_SECONDS;
	const interval = setInterval(() => {
		cooldown.value--;
		if (cooldown.value <= 0) clearInterval(interval);
	}, 1000);
}

function resetTurnstile() {
	if (widgetId.value) window.turnstile?.reset(widgetId.value);
	turnstileToken.value = "";
}

const submitForm = async () => {
	if (honeypot.value) return;
	if (!validateFields()) return;

	if (!turnstileToken.value) {
		result.value = "Please complete the security check.";
		status.value = "error";
		return;
	}

	try {
		status.value = "loading";

		const response = await $fetch<WorkerResponse>(
			config.public.workerUrl as string,
			{
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: {
					name: form.value.name,
					email: form.value.email,
					message: form.value.message,
					turnstileToken: turnstileToken.value,
				},
			},
		);

		if (response.success) {
			status.value = "success";
			result.value = "Message sent — I'll get back to you soon!";
			form.value.name = "";
			form.value.email = "";
			form.value.message = "";
			resetTurnstile();
			startCooldown();
		} else {
			status.value = "error";
			result.value = response.message ?? "Something went wrong. Try again.";
			resetTurnstile();
		}
	} catch (error) {
		console.error(error);
		status.value = "error";
		result.value = "Something went wrong. Try again.";
		resetTurnstile();
	} finally {
		if (status.value !== "success") {
			setTimeout(() => {
				status.value = "";
				result.value = "";
			}, 5000);
		}
	}
};
</script>
