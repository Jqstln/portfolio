<template>
	<section id="contact" class="py-24 text-center">
		<h2 class="text-3xl font-bold text-white mb-12 flex items-center justify-center">
			<span class="text-cyan-400 font-mono text-2xl mr-3">04.</span> Get In Touch
			<span class="hidden sm:block h-px bg-gray-700 w-full max-w-xs ml-6" />
		</h2>

		<p class="max-w-xl mx-auto text-gray-400 mb-12">
			I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is
			always open. I'll get back to you!
		</p>

		<form
			class="max-w-xl mx-auto flex flex-col gap-6 text-left backdrop-blur-sm bg-gray-900/30 p-8 rounded-2xl shadow-xl border border-gray-700"
			@submit.prevent="submitForm"
		>
			<input
				v-model="form.name"
				type="text"
				name="name"
				placeholder="Name"
				required
				class="p-4 rounded-xl bg-gray-800/50 text-white border border-cyan-500/40 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300 placeholder-gray-400"
			>
			<input
				v-model="form.email"
				type="email"
				name="email"
				placeholder="Email"
				required
				class="p-4 rounded-xl bg-gray-800/50 text-white border border-cyan-500/40 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300 placeholder-gray-400"
			>
			<textarea
				v-model="form.message"
				name="message"
				placeholder="Message"
				required
				class="p-4 rounded-xl bg-gray-800/50 text-white border border-cyan-500/40 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 outline-none resize-none h-36 transition-all duration-300 placeholder-gray-400"
			/>
			<div class="flex justify-center">
				<VueHcaptcha
					ref="hcaptchaRef"
					:sitekey="sitekey"
					theme="dark"
					@verify="onVerify"
				/>
			</div>
			<button
				type="submit"
				:disabled="status === 'loading'"
				class="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-cyan-500/50 transition-all duration-300"
			>
				{{ status === 'loading' ? 'Sending...' : 'Send Message' }}
			</button>
		</form>

		<p
			v-if="result"
			:class="status === 'success' ? 'text-green-400 mt-6 font-semibold' : 'text-red-400 mt-6 font-semibold'"
		>
			{{ result }}
		</p>

		<div class="mt-12">
			<a
				href="mailto:hello@justinnn.dev"
				class="text-cyan-400 hover:text-cyan-300 font-mono underline underline-offset-4"
			>Or email me directly</a>
		</div>
	</section>
</template>

<script setup lang="ts">
// biome-ignore lint/style/useImportType: runtime import needed for Vue template component resolution
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

interface Web3FormsResponse {
	success: boolean;
	message?: string;
}

const config = useRuntimeConfig();
const sitekey = config.public.hcaptchaSitekey as string;

const form = ref({
	access_key: config.public.web3formsKey as string,
	subject: "New message from portfolio",
	name: "",
	email: "",
	message: "",
	"h-captcha-response": "",
});

const status = ref("");
const result = ref("");
const hcaptchaRef = ref<InstanceType<typeof VueHcaptcha> | null>(null);

const onVerify = (token: string) => {
	form.value["h-captcha-response"] = token;
};

const submitForm = async () => {
	if (!form.value.name || !form.value.email || !form.value.message) {
		result.value = "Please fill in all fields.";
		status.value = "error";
		return;
	}
	if (!form.value["h-captcha-response"]) {
		result.value = "Please complete the hCaptcha.";
		status.value = "error";
		return;
	}

	try {
		status.value = "loading";
		const formData = new FormData();
		for (const [key, val] of Object.entries(form.value)) {
			formData.append(key, val);
		}

		const response = await $fetch<Web3FormsResponse>("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		if (response.success) {
			status.value = "success";
			result.value = "Message sent successfully!";
		} else {
			status.value = "error";
			result.value = response.message ?? "Something went wrong!";
		}
	} catch (error) {
		console.error(error);
		status.value = "error";
		result.value = "Something went wrong!";
	} finally {
		form.value.name = "";
		form.value.email = "";
		form.value.message = "";
		form.value["h-captcha-response"] = "";
		hcaptchaRef.value?.reset();

		setTimeout(() => {
			status.value = "";
			result.value = "";
		}, 5000);
	}
};
</script>
