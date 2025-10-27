<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-[#0D1117]/90 backdrop-blur-md border-b border-gray-800 shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center max-w-6xl">
      <a href="#home" class="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
        Justinnn<span class="text-cyan-400">.</span>
      </a>
      <div class="hidden md:flex items-center space-x-8">
        <a 
          v-for="link in links" 
          :key="link.href" 
          :href="link.href"
          class="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-mono"
        >
          {{ link.label }}
        </a>
      </div>
      <button 
        v-if="!isMenuOpen"
        class="md:hidden text-gray-300 focus:outline-none z-50" 
        @click="isMenuOpen = true"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </nav>
    <transition name="slide-fade">
      <div
v-if="isMenuOpen"
           class="fixed inset-0 bg-[#0D1117] flex flex-col justify-center items-center space-y-8 text-2xl text-gray-300 font-mono z-40">
        <button class="absolute top-6 right-6 text-gray-300" @click="isMenuOpen = false">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <a 
          v-for="link in links" 
          :key="link.href" 
          :href="link.href" 
          class="hover:text-cyan-400 transition-colors duration-300"
          @click="isMenuOpen = false"
        >
          {{ link.label }}
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const links = [
    { href: "/#about", label: "/about" },
    { href: "/#experience", label: "/experience" },
    { href: "/#projects", label: "/projects" },
    { href: "/#contact", label: "/contact" },
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

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>