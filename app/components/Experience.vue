<template>
	<section id="experience" class="relative py-32 mx-auto max-w-6xl px-6">
		<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			<div class="absolute top-1/2 -left-64 w-100 h-100 rounded-full bg-cyan-500/6 blur-[100px]" />
		</div>
		<div class="flex items-center gap-4 mb-12">
			<span class="font-mono text-xs text-cyan-400 tracking-widest uppercase">02 &mdash; Experience</span>
			<div class="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
		</div>
		<h2 class="text-3xl lg:text-4xl font-bold text-white mb-16 tracking-tight">
			Where I've worked
		</h2>
		<div class="relative">
			<div class="absolute left-4 top-0 bottom-0 w-px bg-linear-to-b from-cyan-400/50 via-white/10 to-transparent" aria-hidden="true" />
			<div class="space-y-12">
				<div
					v-for="(job, index) in experience"
					:key="job.company"
					class="relative pl-16 group"
				>
					<div
						class="absolute left-0 top-1 w-8 h-8 rounded-full glass-card border border-cyan-400/40 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400/80"
						:class="index === 0 ? 'node-glow' : ''"
					>
						<div class="w-2 h-2 rounded-full bg-cyan-400" />
					</div>
					<div class="glass-card p-6 transition-all duration-300 hover:border-white/15 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/40">
						<div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
							<div>
								<h3 class="text-lg font-bold text-white leading-snug">
									{{ job.role }}
								</h3>
								<p class="text-cyan-400 font-medium text-sm">{{ job.company }}</p>
							</div>
							<span class="shrink-0 px-3 py-1 rounded-full text-xs font-mono text-gray-500 border border-white/8 bg-white/3 self-start">
								{{ job.duration }}
							</span>
						</div>
						<ul class="space-y-2">
							<li
								v-for="d in job.description"
								:key="d"
								class="flex items-start gap-3 text-sm text-gray-400"
							>
								<span class="mt-1.5 w-1 h-1 shrink-0 rounded-full bg-cyan-400/50" />
								{{ d }}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const experience = [
	{
		duration: "2023 \u2013 2026",
		role: "Co-Founder & Developer",
		company: "SpectrumSpark",
		description: [
			"Co-founding a platform built for neurodiverse people — we handle the full stack ourselves.",
			"Own the entire front-end: design system, accessibility audits, and component library.",
			"Shipped several major feature drops while keeping the codebase something I'm not embarrassed by.",
		],
	},
	{
		duration: "2024 \u2013 2025",
		role: "Co-Founder & Developer",
		company: "M1dnght Development",
		description: [
			"Started a small dev collective with a friend — we take on client work and build our own projects.",
			"Built Discord bots, community dashboards, and internal tooling for various clients.",
			"Handling everything from scoping and architecture to deployment and maintenance.",
		],
	},
	{
		duration: "2020 \u2013 2024",
		role: "Developer",
		company: "Devolvex, LLC",
		description: [
			"My first real dev gig — started writing Minecraft plugins in Java at 14 and grew from there.",
			"Shipped plugins, bots, REST APIs, and static sites for gaming communities and small clients.",
			"Learned how to actually finish projects, write docs, and not break production on a Friday.",
		],
	},
];
</script>

