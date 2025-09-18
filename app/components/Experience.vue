<template>
  <section id="experience" class="py-24">
    <h2 class="text-3xl font-bold text-white mb-12 flex items-center"><span class="text-cyan-400 font-mono text-2xl mr-3">02.</span> Work Experience <span class="block h-px bg-gray-700 w-full max-w-xs ml-6" /></h2>
    <div class="flex flex-col md:flex-row gap-8">
      <div class="flex md:flex-col overflow-x-auto md:overflow-x-visible border-b-2 md:border-b-0 md:border-l-2 border-gray-800">
        <button
          v-for="(job, index) in experience" :key="job.company"
          @click="activeExperienceIndex = index"
          :class="[
            'px-4 py-3 text-left w-full md:w-auto font-mono whitespace-nowrap text-gray-400 transition-colors duration-300 border-b-2 md:border-b-0 md:border-l-2 border-transparent',
            activeExperienceIndex === index ? 'text-cyan-400 bg-gray-800/50 border-cyan-400' : 'hover:bg-gray-800/30 hover:text-white'
          ]"
        >
          {{ job.company }}
        </button>
      </div>
      <div class="p-4 min-h-[250px] w-full">
        <h3 class="text-xl font-bold text-white">{{ current.role }} <span class="text-cyan-400">@ {{ current.company }}</span></h3>
        <p class="text-sm text-gray-500 font-mono mt-1 mb-4">{{ current.duration }}</p>
        <ul class="space-y-3 text-gray-400 list-disc pl-5">
          <li v-for="d in current.description" :key="d">{{ d }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
const experience = ref([
	{
		duration: "2023 - Present",
		role: "Co-Founder & Developer",
		company: "SpectrumSpark",
		description: [
			"Building a platform to support neurodiverse communities with tools and resources.",
			"Responsible for front-end development and collaborative project planning.",
			"Working closely with team members to improve accessibility and engagement.",
		],
	},
	{
		duration: "2024 - Present",
		role: "Co-Founder & Developer",
		company: "M1dnght Development",
		description: [
			"Developed community-driven projects, Discord bots, and web applications.",
			"Managed small team collaborations and contributed to open-source tools.",
			"Focused on smart, automated solutions for community engagement.",
		],
	},
	{
		duration: "2020 - 2024",
		role: "Developer",
		company: "Devolvex, LLC",
		description: [
			"Built Minecraft plugins, Discord bots, APIs, and websites for clients and communities.",
			"Maintained and archived multiple public repositories.",
			"Collaborated with other developers on creative software projects.",
		],
	},
]);

const activeExperienceIndex = ref(0);
const current = computed(() => experience.value[activeExperienceIndex.value]);
</script>