<template>
	<header
		class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
		:class="isScrolled ? 'bg-brand-base/80 backdrop-blur-xl border-b border-white/8 shadow-2xl shadow-black/40' : 'bg-transparent'"
	>
		<nav class="mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
			
			<a
				href="#home"
				class="group flex items-center gap-2 text-xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 tracking-tight"
			>
				<span class="relative">Justinnn<span class="text-cyan-400 group-hover:text-white transition-colors duration-300">.</span></span>
			</a>

			
			<div class="hidden md:flex items-center gap-1">
				<a
					v-for="link in links"
					:key="link.href"
					:href="link.href"
					class="relative px-4 py-2 text-sm text-gray-400 hover:text-white font-mono transition-colors duration-300 rounded-lg hover:bg-white/5 group"
				>
					<span class="text-cyan-400/60 group-hover:text-cyan-400 transition-colors duration-300">~/</span>{{ link.label }}
				</a>
			</div>

			
			<button
				v-if="!isMenuOpen"
				class="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none rounded-lg hover:bg-white/5 transition-colors z-50"
				aria-label="Open menu"
				@click="isMenuOpen = true"
			>
				<Icon name="lucide:menu" class="w-5 h-5" />
			</button>
		</nav>

		
		<transition name="slide-fade">
			<div
				v-if="isMenuOpen"
				class="fixed inset-0 bg-brand-base/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 z-40"
			>
				<button
					class="absolute top-5 right-6 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
					aria-label="Close menu"
					@click="isMenuOpen = false"
				>
					<Icon name="lucide:x" class="w-6 h-6" />
				</button>

				<a
					v-for="link in links"
					:key="link.href"
					:href="link.href"
					class="text-2xl text-gray-300 font-mono hover:text-cyan-400 transition-colors duration-300 group"
					@click="isMenuOpen = false"
				>
					<span class="text-cyan-400/60 group-hover:text-cyan-400 transition-colors">~/</span>{{ link.label }}
				</a>
			</div>
		</transition>
	</header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);
const isScrolled = ref(false);

const links = [
	{ href: "/#about", label: "about" },
	{ href: "/#experience", label: "experience" },
	{ href: "/#projects", label: "projects" },
	{ href: "/#contact", label: "contact" },
];

function handleScroll() {
	isScrolled.value = window.scrollY > 10;
}

onMounted(() => {
	handleScroll();
	window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
	window.removeEventListener("scroll", handleScroll);
});
</script>