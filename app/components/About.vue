<template>
	<section id="about" class="relative py-32 mx-auto max-w-6xl px-6">
		<div class="flex items-center gap-4 mb-12">
			<span class="font-mono text-xs text-cyan-400 tracking-widest uppercase">01 &mdash; About</span>
			<div class="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
		</div>
		<h2 class="text-3xl lg:text-4xl font-bold text-white mb-12 tracking-tight">
			Who's behind the screen
		</h2>
		<div class="grid md:grid-cols-3 gap-10 items-start">
			
			<div class="md:col-span-2 space-y-6">
				<div class="glass-card p-8 space-y-4">
					<p class="text-gray-400 leading-relaxed">
						I'm Justin — a <span class="text-white font-medium">self-taught developer</span> from the Netherlands
						who started building stuff for Minecraft servers at 14 and never really stopped.
						These days I build web apps, the occasional Discord bot, and anything else that scratches an itch.
					</p>
					<p class="text-gray-400 leading-relaxed">
						When I'm not at my desk I'm probably gaming, bothering one of my cats, or going down a Wikipedia rabbit hole
						at 1am. I care a lot about code that's actually readable — and UIs that don't make people squint.
					</p>
				</div>
				<div class="glass-card p-6">
					<p class="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">// Technologies I work with</p>
					<ul class="grid grid-cols-2 sm:grid-cols-3 gap-3">
						<li
							v-for="skill in recentSkills"
							:key="skill"
							class="flex items-center gap-2 text-sm text-gray-300 group"
						>
							<span class="w-1.5 h-1.5 shrink-0 rounded-full bg-cyan-400/60 group-hover:bg-cyan-400 transition-colors duration-300" />
							{{ skill }}
						</li>
					</ul>
				</div>
			</div>
			<div class="relative w-full max-w-xs mx-auto md:mx-0">
				<div class="absolute inset-0 rounded-xl border border-cyan-400/20 translate-x-3 translate-y-3" />
				<div class="absolute inset-0 rounded-xl bg-cyan-500/5 blur-xl translate-x-3 translate-y-3" />
				<NuxtImg
					src="/img/profile.png"
					alt="Justin"
					loading="eager"
					fetchpriority="high"
					class="relative w-full aspect-square object-cover rounded-xl border border-white/8 shadow-2xl shadow-black/60"
					format="webp"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const recentSkills = [
	"TypeScript",
	"Nuxt 4",
	"Vue 3",
	"Node.js",
	"PostgreSQL",
	"Tailwind CSS",
	"Figma",
	"Docker",
];
</script>