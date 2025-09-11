<template>
    <section id="projects" class="py-24">
        <h2 class="text-3xl font-bold text-white mb-12 flex items-center"><span class="text-cyan-400 font-mono text-2xl mr-3">03.</span> My Projects <span class="block h-px bg-gray-700 w-full max-w-xs ml-6"></span></h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="project in projects" :key="project.title" class="bg-[#161B22] border border-gray-800 rounded-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div class="p-6 flex flex-col h-full">
                    <div class="flex justify-between items-center mb-4">
                        <svg class="w-10 h-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5-15h16.5M3.75 6a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 6v12a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18V6Z" /></svg>
                        <div class="flex space-x-2">
                            <NuxtLink :to="project.github" target="_blank" rel="noopener" class="text-gray-500 hover:text-cyan-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                            </NuxtLink>
                            <NuxtLink :to="project.live" target="_blank" rel="noopener" class="text-gray-500 hover:text-cyan-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                            </NuxtLink>
                        </div>
                    </div>
                    <h3 class="text-xl font-bold text-white mt-auto">{{ project.title }}</h3>
                    <p class="text-gray-400 my-2 flex-grow">{{ project.description }}</p>
                    <div class="flex flex-wrap gap-2 text-xs font-mono mt-4">
                        <span v-for="tech in project.tech" :key="tech" class="bg-gray-800 px-2 py-1 rounded">{{ tech }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = [
	{
		title: "ChargeBuddies",
		description:
			"Rent portable chargers on the go—never run out of power again.",
		tech: ["Next.js", "Stripe", "PostgreSQL", "React", "Tailwind CSS"],
		github: "https://github.com/ChargeBuddies/",
		live: "https://chargebuddies.nl/",
	},
	{
		title: "ARC8",
		description:
			"A fun Discord game bot with guessing, counting, and other mini-games.",
		tech: ["Node.js", "Discord.js", "MariaDB", "Stripe"],
		github: "https://github.com/ARC8-Official",
		live: "https://arc8.fun/",
	},
	{
		title: "OaseMC",
		description:
			"The friendliest Minecraft server in NL & BE—join and play with our community!",
		tech: ["Java", "Spigot", "MySQL", "BungeeCord"],
		github: "https://github.com/OaseMC",
		live: "https://oasemc.nl/",
	},
	{
		title: "Portfolio",
		description:
			"My personal portfolio built to be fast, responsive, and showcase my work.",
		tech: ["Nuxt 3", "Tailwind CSS", "Figma"],
		github: "https://github.com/Jqstln/portfolio",
		live: "https://justinnn.dev/",
	},
	{
		title: "SpectrumSpark",
		description:
			"A platform supporting neurodiverse minds with resources, tools, and community.",
		tech: ["Vue.js", "Node.js", "Tailwind CSS", "Figma"],
		github: "https://github.com/SpectrumSpark",
		live: "https://spectrumspark.org/",
	},
];
</script>