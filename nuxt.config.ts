// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { definePerson } from "nuxt-schema-org/schema";

export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			web3formsKey: "",
			hcaptchaSitekey: "",
		},
	},
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	ssr: true,
	nitro: {
		prerender: {
			autoSubfolderIndex: false,
			crawlLinks: true,
			routes: ["/", "/sitemap.xml", "/robots.txt"],
		},
	},
	css: ["~/assets/css/main.css"],
	vite: { plugins: [tailwindcss()] },
	modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxtjs/seo"],
	fonts: {
		families: [
			{ name: "Inter", weights: [400, 500, 600, 700, 800] },
			{ name: "JetBrains Mono", weights: [400, 500] },
		],
	},
	site: {
		url: "https://justinnn.dev",
		name: "Justinnn",
		description:
			"Self-taught web developer from the Netherlands. I build web apps, Discord bots, and anything else that scratches an itch.",
		defaultLocale: "en",
		trailingSlash: false,
		indexable: true,
	},
	schemaOrg: {
		identity: definePerson({
			name: "Justin",
			url: "https://justinnn.dev",
			image: "https://justinnn.dev/img/profile.png",
			jobTitle: "Web Developer & Designer",
			description: "Self-taught web developer from the Netherlands.",
			sameAs: [
				"https://github.com/Jqstln",
				"https://www.linkedin.com/in/justinharing/",
			],
		}),
	},
	sitemap: {
		autoLastmod: true,
		defaults: {
			changefreq: "weekly",
			priority: 0.7,
		},
	},
	linkChecker: {
		enabled: true,
	},
	robots: {
		blockNonSeoBots: true,
		blockAiBots: true,
	},
	app: {
		head: {
			link: [
				{
					rel: "icon",
					type: "image/png",
					sizes: "96x96",
					href: "/favicon-96x96.png",
				},
				{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
				{ rel: "shortcut icon", href: "/favicon.ico" },
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{ rel: "manifest", href: "/site.webmanifest" },
			],
			meta: [
				{ name: "apple-mobile-web-app-title", content: "Justinnn" },
				{ name: "theme-color", content: "#0D1117" },
			],
		},
	},
});
