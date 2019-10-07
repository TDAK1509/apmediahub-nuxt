export default {
  mode: "universal",

  head: {
    titleTemplate: "%s",
    title: "APMediahub",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap&subset=vietnamese"
      }
    ]
  },

  loading: { color: "#fff" },

  css: ["~/assets/page-transition.css"],

  router: {
    middleware: "i18n"
  },

  plugins: [
    "~/plugins/global_components.js",
    "~/plugins/i18n.js",
    "~/plugins/api.js"
  ],

  buildModules: ["@nuxtjs/vuetify"],

  modules: ["@nuxtjs/axios"],

  axios: {
    browserBaseURL: "http://localhost:5000"
  },

  vuetify: {
    customVariables: [],
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
