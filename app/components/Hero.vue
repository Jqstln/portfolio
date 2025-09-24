<template>
    <section id="home" class="min-h-screen flex items-center pt-24 md:pt-0">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div class="space-y-6">
                    <h1 class="text-4xl lg:text-6xl font-bold text-white">
                        Hi, I'm {{ developer.name }}
                    </h1>
                    <p class="text-lg text-gray-400">
                        A creative {{ developer.title }} with a passion for building intuitive and performant web
                        applications. Welcome to my digital playground.
                    </p>
                    <div
                        class="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href="#projects"
                            class="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition-all duration-300 w-full sm:w-auto text-center">
                            View My Work
                </a>
                        <a href="#contact"
                            class="border border-gray-600 text-gray-300 font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 hover:border-gray-700 transition-all duration-300 w-full sm:w-auto text-center">
                            Get in Touch
                        </a>
                    </div>
                </div>
                <div
                    class="bg-[#161B22] border border-gray-800 rounded-lg p-4 font-mono text-sm shadow-2xl shadow-cyan-500/10 overflow-x-auto">
                    <div class="flex items-center space-x-2 border-b border-gray-800 pb-2 mb-4">
                        <div class="w-3 h-3 bg-red-500 rounded-full" />
                        <div class="w-3 h-3 bg-yellow-500 rounded-full" />
                        <div class="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <pre class="text-gray-400"><code>
<span class="text-purple-400">const</span> <span class="text-green-400">developer</span> = {
  <span class="text-sky-400">name</span>: <span class="text-orange-400">'{{ developer.name }}'</span>,
  <span class="text-sky-400">title</span>: <span class="text-orange-400">'{{ developer.title }}'</span>,
  <span class="text-sky-400">skills</span>: [
    <span class="text-orange-400" v-for="(s, i) in developer.skills" :key="s">'{{ s }}'{{ i < developer.skills.length - 1 ? ',' : '' }} </span>
  ],
  <span class="text-sky-400">contact</span>: {
    <span class="text-sky-400">email</span>: <span class="text-orange-400">'{{ developer.contact.email }}'</span>,
    <span class="text-sky-400">github</span>: <span class="text-orange-400">'{{ developer.contact.github }}'</span>
  }
};
</code></pre>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const developer = ref({
	name: "Justin",
	title: "Web Developer + Designer",
	skills: ["Nuxt.js", "Vue", "Node.js", "TypeScript", "TailwindCSS"],
	contact: {
		email: "hello@justinnn.dev",
		github: "/Jqstln",
	},
});
</script>
