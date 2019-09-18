<template>
    <v-menu offset-y transition="scroll-y-transition" lazy>
        <template #activator="{ on }">
            <v-list-item v-on="on">
                <v-list-item-title>
                    <v-img :src="selectedLanguage" width="30" height="20"></v-img>
                </v-list-item-title>
            </v-list-item>
        </template>

        <v-list>
            <v-list-item
                v-for="(flag, lang) in languages"
                :key="`lang${lang}`"
                @click="setLanguague(lang)"
            >
                <v-list-item-title>
                    <v-img :src="flag" width="30" height="20"></v-img>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
import flagEn from "~/assets/images/flag-en.png";
import flagVn from "~/assets/images/flag-vn.png";
import { mapState } from "vuex";

export default {
    name: "ChangeLanguage",
    data() {
        return {
            languages: { vn: flagVn, en: flagEn }
        };
    },

    computed: {
        ...mapState(["locale"]),
        selectedLanguage() {
            return this.languages[this.locale];
        }
    },

    methods: {
        setLanguague(locale) {
            this.$store.commit("SET_LANG", locale);
            this.$i18n.locale = locale;

            // Replace locale part of the current URL
            const regex = /(\/)(en|vn)(\/.*)/;
            const path = this.$route.fullPath;
            const newPath = path.replace(regex, `$1${locale}$3`);

            this.$router.push(newPath);
        }
    }
};
</script>