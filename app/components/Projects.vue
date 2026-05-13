<template>
	<section id="projects" class="relative py-32 mx-auto max-w-6xl px-6">
		
		<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			<div class="absolute top-0 right-0 w-150 h-100 rounded-full bg-cyan-500/6 blur-[120px]" />
		</div>

		<div class="flex items-center gap-4 mb-12">
			<span class="font-mono text-xs text-cyan-400 tracking-widest uppercase">03 &mdash; Projects</span>
			<div class="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
		</div>

		<h2 class="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
			Things I've Built
		</h2>
		<p class="text-gray-500 text-sm font-mono mb-12">// A selection of projects I'm proud of</p>

		
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
			
			<div
				v-if="featured"
				class="lg:col-span-2 glass-card group relative overflow-hidden p-6 flex flex-col gap-4 transition-all duration-300 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/50"
			>
				
				<div class="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-cyan-400/60 via-cyan-400/20 to-transparent" />

				<div class="flex items-start justify-between">
					<div class="p-2.5 rounded-lg bg-cyan-400/10 border border-cyan-400/20">
						<Icon name="lucide:zap" class="w-5 h-5 text-cyan-400" />
					</div>
					<div class="flex gap-2">
						<a
							:href="featured.github"
							target="_blank"
							rel="noopener noreferrer"
							class="p-1.5 text-gray-600 hover:text-cyan-400 rounded-md hover:bg-white/5 transition-all duration-200"
							aria-label="View on GitHub"
						>
							<Icon name="simple-icons:github" class="w-4 h-4" />
						</a>
						<a
							:href="featured.live"
							target="_blank"
							rel="noopener noreferrer"
							class="p-1.5 text-gray-600 hover:text-cyan-400 rounded-md hover:bg-white/5 transition-all duration-200"
							aria-label="View live"
						>
							<Icon name="lucide:external-link" class="w-4 h-4" />
						</a>
					</div>
				</div>

				<div>
					<h3 class="text-xl font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">{{ featured.title }}</h3>
					<p class="text-gray-400 text-sm leading-relaxed">{{ featured.description }}</p>
				</div>

				<div class="flex flex-wrap gap-2 mt-auto">
					<span
						v-for="tech in featured.tech"
						:key="tech"
						class="px-2.5 py-1 text-xs font-mono rounded-md border border-white/8 bg-white/3 text-gray-500"
					>
						{{ tech }}
					</span>
				</div>
			</div>

			<div
				v-for="project in rest"
				:key="project.title"
				class="glass-card group relative overflow-hidden p-6 flex flex-col gap-4 transition-all duration-300 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/50"
			>
				<div class="flex items-start justify-between">
					<div class="p-2.5 rounded-lg bg-white/4 border border-white/8">
						<Icon name="lucide:folder" class="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
					</div>
					<div class="flex gap-2">
						<a
							:href="project.github"
							target="_blank"
							rel="noopener noreferrer"
							class="p-1.5 text-gray-600 hover:text-cyan-400 rounded-md hover:bg-white/5 transition-all duration-200"
							aria-label="View on GitHub"
						>
							<Icon name="simple-icons:github" class="w-4 h-4" />
						</a>
						<a
							:href="project.live"
							target="_blank"
							rel="noopener noreferrer"
							class="p-1.5 text-gray-600 hover:text-cyan-400 rounded-md hover:bg-white/5 transition-all duration-200"
							aria-label="View live"
						>
							<Icon name="lucide:external-link" class="w-4 h-4" />
						</a>
					</div>
				</div>

				<div>
					<h3 class="text-base font-bold text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">{{ project.title }}</h3>
					<p class="text-gray-400 text-sm leading-relaxed">{{ project.description }}</p>
				</div>

				<div class="flex flex-wrap gap-2 mt-auto">
					<span
						v-for="tech in project.tech"
						:key="tech"
						class="px-2.5 py-1 text-xs font-mono rounded-md border border-white/8 bg-white/3 text-gray-500"
					>
						{{ tech }}
					</span>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface Project {
	title: string;
	description: string;
	tech: string[];
	github: string;
	live: string;
}

const projects: Project[] = [
	{
		title: "ChargeBuddies",
		description:
			"Rent portable chargers on the go — a full-stack rental platform with real-time station availability, Stripe payments, and an operator dashboard.",
		tech: ["Next.js", "Stripe", "PostgreSQL", "React", "Tailwind CSS"],
		github: "https://github.com/ChargeBuddies/",
		live: "https://chargebuddies.nl/",
	},
	{
		title: "ARC8",
		description:
			"A feature-rich Discord game bot with mini-games, leaderboards, and a Stripe-powered premium tier.",
		tech: ["Node.js", "Discord.js", "MariaDB", "Stripe"],
		github: "https://github.com/ARC8-Official",
		live: "https://arc8.fun/",
	},
	{
		title: "OaseMC",
		description:
			"The friendliest Minecraft server in NL & BE — custom plugins, BungeeCord proxy, and an active community.",
		tech: ["Java", "Spigot", "MySQL", "BungeeCord"],
		github: "https://github.com/OaseMC",
		live: "https://oasemc.nl/",
	},
	{
		title: "Portfolio",
		description:
			"This site — built with Nuxt 4 and Tailwind v4 for a fast, accessible, and polished developer showcase.",
		tech: ["Nuxt 4", "Tailwind CSS", "Figma"],
		github: "https://github.com/Jqstln/portfolio",
		live: "/",
	},
	{
		title: "SpectrumSpark",
		description:
			"A platform supporting neurodiverse minds with resources, tools, and a welcoming community space.",
		tech: ["Vue.js", "Node.js", "Tailwind CSS", "Figma"],
		github: "https://github.com/SpectrumSpark",
		live: "https://spectrumspark.org/",
	},
];

const featured = projects[0] as Project;
const rest = projects.slice(1);
</script>