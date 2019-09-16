export default {
  mode: "universal",

  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  loading: { color: "#fff" },

  css: ["~/assets/main.css"],

  router: {
    middleware: "i18n"
  },

  plugins: ["~/plugins/global_components.js", "~/plugins/i18n.js"],

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/axios"],

  axios: {
    browserBaseURL: "http://localhost:5000"
  },

  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#c80000"
        }
      }
    }
  },

  generate: {
    routes: ["/", "/login", "/en", "/en/login"]
  },

  build: {
    extend(config, context) {}
  }
};
