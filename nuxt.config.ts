// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { defineOrganization } from 'nuxt-schema-org/schema';

export default defineNuxtConfig({
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
    seo: {
    defaults: {
      title: "Justinnn - Web Dev & Designer",
      description: "Web developer from The Netherlands creating intuitive, high-performance applications. Gamer, animal lover, and passionate about building digital experiences..",
      keywords:
        "web development, app development, game development, Justinnn",
      siteUrl: "https://justinnn.dev",
      siteName: "Justinnn",
      applicationName: "Justinnn",
      twitterCard: "summary",
      ogImage: "https://justinnn.dev/img/android-chrome-512x512.png",
      twitterImage: "https://justinnn.dev/img/android-chrome-512x512.png",
      ogType: "website",
      locale: "en_US",
      robots: "index, follow",
      canonical: true,
      themeColor: "#0D1117",
      colorScheme: "dark",
    },
  },
  site: {
    url: "https://justinnn.dev",
    name: "Justinnn",
    description: "Web developer from The Netherlands creating intuitive, high-performance applications. Gamer, animal lover, and passionate about building digital experiences.",
    defaultLocale: "en",
    trailingSlash: false,
    indexable: true,
  },
  schemaOrg: {
    identity: defineOrganization({
      name: "Justinnn",
      url: "https://justinnn.dev",
      logo: "https://justinnn.dev/img/logo.png",
      description: "Web developer from The Netherlands creating intuitive, high-performance applications. Gamer, animal lover, and passionate about building digital experiences.",
    })
  },
  sitemap: {
    autoLastmod: true,
    inferStaticPagesAsRoutes: true,
    cacheMaxAge: 60 * 60, // 1 hour
    defaults: {
      changefreq: "weekly",
      priority: 0.7,
    },
  },
  linkChecker: {
    enabled: true,
    failOn404: "true",
  },
  robots: {
    blockNonSeoBots: true,
    blockAiBots: true,
  },
  app: {
    head: {
      link: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/img/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/img/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/img/favicon-16x16.png",
        },
        { rel: "manifest", href: "/img/site.webmanifest" },
      ],
    },
  },
});
