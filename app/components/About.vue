<template>
    <section id="about" class="py-24">
        <h2 class="text-3xl font-bold text-white mb-12 flex items-center"><span class="text-cyan-400 font-mono text-2xl mr-3">01.</span> About Me <span class="block h-px bg-gray-700 w-full max-w-xs ml-6"></span></h2>
        <div class="grid md:grid-cols-3 gap-10 items-start">
            <div class="md:col-span-2 space-y-4 text-lg text-gray-400">
                <p>I'm a developer and avid gamer based in The Netherlands. Beyond coding, I have a love for animals and enjoy socializing at parties. I thrive on combining creativity and technical skills, whether I'm building an application or diving into my favorite games.</p>
                <ul class="grid grid-cols-2 gap-2 text-gray-300">
                    <li v-for="skill in recentSkills" :key="skill" class="flex items-center space-x-2">
                        <svg class="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                        <span>{{ skill }}</span>
                    </li>
                </ul>
            </div>
            <div class="relative w-full max-w-xs mx-auto md:mx-0 h-80">
                <div class="absolute inset-0 bg-gray-800 rounded-lg transform -rotate-5 transition-transform duration-500 hover:rotate-3"></div>
                <img src="/profile.png" alt="Justin" class="relative w-full h-full object-cover rounded-lg shadow-lg -rotate-0" />
            </div>
        </div>
    </section>
</template>

<script setup>
const recentSkills = [
    'TypeScript', 'Nuxt 4', 'Node.js',
    'PostgreSQL', 'Tailwind CSS', 'Figma'
];
</script>