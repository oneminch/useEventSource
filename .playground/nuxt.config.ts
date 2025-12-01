// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        }
      ]
    }
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  vite: {
    server: {
      watch: {
        ignored: ["**/node_modules/**", "../**"]
      }
    },
    optimizeDeps: {
      include: ["@minch/use-event-source"]
    },
    resolve: {
      preserveSymlinks: true
    }
  }
});
