export default {
    mode: "universal",

    head: {
        titleTemplate: "%s",
        title: "APMediahub",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
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

    plugins: ["~/plugins/global_components.js"],

    buildModules: ["@nuxtjs/vuetify"],

    modules: ["@nuxtjs/axios", "nuxt-i18n"],

    axios: {
        browserBaseURL: "http://localhost:5000"
    },

    i18n: {
        locales: ["vn", "en"],
        defaultLocale: "vn",
        strategy: "prefix_except_default",
        vueI18nLoader: true,
        vueI18n: {
            fallbackLocale: "vn",
            messages: {
                vn: {
                    user_role: {
                        client: "Nhà Tuyển Dụng",
                        agency: "Nhà Môi Giới",
                        journalist: "Nhà Báo",
                        freelancer: "Người Làm Việc Tự Do"
                    }
                },

                en: {
                    user_role: {
                        client: "Client",
                        agency: "Agency",
                        journalist: "Journalist",
                        freelancer: "Freelancer"
                    }
                }
            }
        }
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
        extend(config, context) {},
        standalone: true
    }
};
