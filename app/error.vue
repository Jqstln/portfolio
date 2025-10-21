<script setup lang="ts">
import type { NuxtError } from "#app";
import { clearError } from "#app";

const props = defineProps<{
	error: NuxtError;
}>();

const codeMeta: Record<number, { title: string; message: string }> = {
	401: {
		title: "Unauthorized",
		message: "You need to be signed in to view this resource.",
	},
	403: {
		title: "Forbidden",
		message: "You do not have permission to access this page.",
	},
	404: {
		title: "Page Not Found",
		message: "Sorry, the page you were looking for doesn’t exist.",
	},
	500: {
		title: "Server Error",
		message: "The server encountered an unexpected condition.",
	},
};

const statusCode = props.error.statusCode ?? 500;
const meta = codeMeta[statusCode] ?? {
	title: "Something went wrong",
	message:
		props.error.statusMessage || props.error.message || "Unexpected error",
};

const title = meta.title;
const message = meta.message;
const is404 = statusCode === 404;

function goHome() {
	clearError({ redirect: "/" });
}
</script>

<template>
  <div class="bg-[#0D1117] text-gray-300 font-sans antialiased min-h-screen flex flex-col">
    <Header />

    <main class="container mx-auto px-6 max-w-6xl grow flex items-center py-24">
      <div class="w-full">
        <div class="max-w-2xl mx-auto text-center space-y-6">
          <div>
            <span
              class="inline-flex items-center justify-center rounded-lg border border-gray-700 bg-[#161B22] px-4 py-2 text-sm font-mono tracking-wide text-cyan-400"
            >
              <span v-if="is404">Error 404</span>
              <span v-else>Error {{ error.statusCode }}</span>
            </span>
          </div>

            <h1 class="text-4xl md:text-5xl font-bold text-white">
              {{ title }}
            </h1>

            <p class="text-gray-400 leading-relaxed max-w-prose mx-auto">
              {{ message }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <button
                class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition"
                @click="goHome"
              >
                Go Home
              </button>
            </div>

            <div
              v-if="!is404"
              class="bg-[#161B22] border border-gray-800 rounded-lg p-4 font-mono text-xs text-gray-400 text-left overflow-auto max-h-64"
            >
              <pre>{{ error }}</pre>
            </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
/* (Optional) add any extra styling overrides here */
</style>