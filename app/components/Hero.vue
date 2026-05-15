<template>
	<section id="home" class="relative min-h-screen flex items-center overflow-hidden pt-20">
		<div class="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
			<div class="absolute -top-40 left-1/2 -translate-x-1/2 w-225 h-150 rounded-full bg-cyan-500/10 blur-[120px]" />
			<div class="absolute top-1/2 -right-64 w-125 h-125 rounded-full bg-cyan-400/5 blur-[100px]" />
		</div>
		<div class="relative z-10 mx-auto max-w-6xl w-full px-6 py-24">
			<div class="grid lg:grid-cols-2 gap-16 items-center">
				<div class="space-y-8">
					<div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-xs font-mono text-cyan-400">
						<span class="w-1.5 h-1.5 rounded-full bg-cyan-400 node-glow" />
						Open to freelance &amp; full-time
					</div>
					<div class="space-y-4">
						<h1 class="text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
							Hi, I'm
							<span class="relative inline-block">
								<span class="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-sky-300">{{ developer.name }}</span>
							</span>
						</h1>
						<p class="text-xl text-gray-400 leading-relaxed max-w-md">
							<span class="text-white font-medium">{{ developer.title }}</span> from the Netherlands.
							I like to keep things fast, clean, and just a bit over-engineered.
						</p>
					</div>
					<div class="flex flex-wrap gap-2">
						<span
							v-for="skill in developer.skills"
							:key="skill"
							class="px-3 py-1 text-xs font-mono rounded-md border border-white/8 bg-white/3 text-gray-400"
						>
							{{ skill }}
						</span>
					</div>
					<div class="flex flex-col sm:flex-row gap-3">
						<a
							href="#projects"
							class="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-white font-semibold text-sm hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5"
						>
							See What I've Built
							<Icon name="lucide:arrow-right" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
						<a
							href="#contact"
							class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-gray-300 font-semibold text-sm hover:bg-white/5 hover:text-white hover:border-white/20 transition-all duration-300"
						>
							Say Hello
						</a>
					</div>
				</div>
				<div class="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/60 glow-cyan-sm">
					<div class="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/2">
						<div class="w-3 h-3 rounded-full bg-red-500/80" />
						<div class="w-3 h-3 rounded-full bg-yellow-500/80" />
						<div class="w-3 h-3 rounded-full bg-green-500/80" />
						<span class="ml-3 text-xs font-mono text-gray-500">developer.ts</span>
					</div>
					<div class="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
						<pre class="text-gray-400 whitespace-pre"><code
><span class="text-gray-500">// <span class="italic">yes, I built this myself</span></span>
<span class="text-purple-400">const</span> <span class="text-green-400">developer</span> <span class="text-gray-300">=</span> <span class="text-cyan-400">{</span>
  <span class="text-sky-300">name</span><span class="text-gray-300">:</span> <span class="text-orange-300">'{{ developer.name }}'</span><span class="text-gray-500">,</span>
  <span class="text-sky-300">role</span><span class="text-gray-300">:</span> <span class="text-orange-300">'{{ developer.title }}'</span><span class="text-gray-500">,</span>
  <span class="text-sky-300">stack</span><span class="text-gray-300">:</span> <span class="text-cyan-400">[</span>
<span v-for="(s, i) in developer.skills" :key="s">    <span class="text-orange-300">'{{ s }}'</span><span v-if="i < developer.skills.length - 1" class="text-gray-500">,</span>
</span>  <span class="text-cyan-400">]</span><span class="text-gray-500">,</span>
  <span class="text-sky-300">contact</span><span class="text-gray-300">:</span> <span class="text-cyan-400">{</span>
    <span class="text-sky-300">email</span><span class="text-gray-300">:</span> <span class="text-orange-300">'{{ developer.contact.email }}'</span><span class="text-gray-500">,</span>
    <span class="text-sky-300">github</span><span class="text-gray-300">:</span> <span class="text-orange-300">'{{ developer.contact.github }}'</span>
  <span class="text-cyan-400">}</span>
<span class="text-cyan-400">}</span><span class="text-gray-300">;</span>

<span class="text-purple-400">export default</span> <span class="text-green-400">developer</span><span class="text-gray-300">;</span>
<span class="text-gray-500">~/ <span class="cursor-blink">▌</span></span>
</code></pre>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const developer = {
	name: "Justin",
	title: "Web Developer + Designer",
	skills: ["Nuxt.js", "Vue", "Node.js", "TypeScript", "TailwindCSS"],
	contact: {
		email: "hello@justinnn.dev",
		github: "github.com/Jqstln",
	},
};
</script>
