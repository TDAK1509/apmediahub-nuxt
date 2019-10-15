<template>
    <v-menu offset-y transition="scroll-y-transition">
        <template #activator="{ on }">
            <v-btn text v-on="on">
                <v-img :src="selectedLanguage"></v-img>
            </v-btn>
        </template>

        <v-list>
            <v-list-item
                v-for="item in languages"
                :key="`lang${item.lang}`"
                @click="setLanguague(item.lang)"
            >
                <v-list-item-title>
                    <div class="d-flex">
                        <img :src="item.flag" class="flag" />
                        <span class="ml-2">{{item.text}}</span>
                    </div>
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
            languages: [
                { flag: flagVn, lang: "vn", text: "Tiếng Việt" },
                { flag: flagEn, lang: "en", text: "English" }
            ],

            flag: {
                en: flagEn,
                vn: flagVn
            }
        };
    },

    computed: {
        ...mapState(["locale"]),

        selectedLanguage() {
            return this.flag[this.locale];
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

<style lang="scss" scoped>
.flag {
    width: 30px;
    height: 20px;
    object-fit: cover;
}
</style>