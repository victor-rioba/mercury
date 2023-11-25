// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/kinde"],
  colorMode: { preference: "light" },
  ui: { icons: "all" },
  devtools: { enabled: true },
});
