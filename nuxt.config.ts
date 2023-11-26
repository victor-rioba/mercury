// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "mercury.io | The e-commerce platform for professional businesses",
      titleTemplate: "%s",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "E-commerce management made easy by this one-stop shop with all your needs",
        },
        {
          property: "og:title",
          content:
            "mercury.io | The e-commerce platform for professional businesses",
        },
        {
          property: "og:description",
          content:
            "E-commerce management made easy by this one-stop shop with all your needs",
        },
        { property: "og:url", content: "https://mercury-blue.vercel.app/" },
        { property: "og:type", content: "website" },
        { property: "og:site:name", content: "mercury.io" },
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:title",
          content:
            "mercury.io | The e-commerce platform for professional businesses",
        },
        {
          name: "twitter:description",
          content:
            "E-commerce management made easy by this one-stop shop with all your needs",
        },
      ],
    },
  },
  modules: ["@nuxt/ui", "@nuxt/image", "@nuxtjs/kinde"],
  colorMode: { preference: "light" },
  ui: { icons: "all" },
  devtools: { enabled: true },
});
