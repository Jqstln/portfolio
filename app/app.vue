<template>
  <div class="bg-[#0D1117] text-gray-300 font-sans antialiased">
    <Header />
    <main class="container mx-auto px-6 max-w-6xl">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth';
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href');
      if (id && id.startsWith('#')) {
        e.preventDefault();
        const el = document.querySelector(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
</script>