<template>
    <v-form ref="form" class="text-left">
        <TheSearchForMediaSearchPanel
            :countries="countries"
            :media="mediaForSearchFilter"
            :segments="segmentsForSearchFilter"
            @removeCountry="removeFromSelectedCountries"
            @removeMedia="removeFromSelectedMedia"
            @removeSegment="removeFromSelectedSegments"
        ></TheSearchForMediaSearchPanel>

        <TheSearchForMediaSearchSelector @change="updateSearchValues"></TheSearchForMediaSearchSelector>

        <div class="d-flex justify-start">
            <v-btn
                color="primary"
                class="px-8"
                ref="postButton"
                :loading="searching"
                :disabled="searching"
                @click="doSearchAction"
            >
                {{$t("common.search")}}
                <v-icon right dark>mdi-magnify</v-icon>
            </v-btn>
        </div>
    </v-form>
</template>

<script>
import mixinDashboardTitle from "~/mixins/dashboard-title";

import TheSearchForMediaSearchPanel from "@/components/TheSearchForMediaSearchPanel";
import TheSearchForMediaSearchSelector from "@/components/TheSearchForMediaSearchSelector";

export default {
    name: "SearchForMedia",

    mixins: [mixinDashboardTitle],

    components: {
        TheSearchForMediaSearchPanel,
        TheSearchForMediaSearchSelector
    },

    data() {
        return {
            searching: false,

            countries: [],
            segments: [],
            language: "",
            media: []
        };
    },

    computed: {
        title() {
            return this.$t("common.search") + " " + this.$t("common.media");
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        segmentsForSearchFilter() {
            return this.segments.map(key => {
                // Add .child between 2 parts of key
                let arrayKeys = key.split(".");
                arrayKeys.splice(1, 0, "child");

                const localeSuffix = arrayKeys.join(".");

                return {
                    text: this.$t(`segments.${localeSuffix}`),
                    value: key
                };
            });
        },

        mediaForSearchFilter() {
            return this.media.map(key => {
                // Add .child between 2 parts of key
                let arrayKeys = key.split(".");
                arrayKeys.splice(1, 0, "child");

                const localeSuffix = arrayKeys.join(".");

                return {
                    text: this.$t(`media.${localeSuffix}`),
                    value: key
                };
            });
        }
    },

    methods: {
        removeFromSelectedCountries(country) {
            const index = this.countries.indexOf(country);
            this.countries.splice(index, 1);
        },

        removeFromSelectedSegments(segment) {
            const index = this.segments.indexOf(segment);
            this.segments.splice(index, 1);
        },

        removeFromSelectedMedia(value) {
            const index = this.media.indexOf(value);
            this.media.splice(index, 1);
        },

        updateSearchValues({ key, value }) {
            this[key] = value;
        },

        async doSearchAction() {
            const result = await this.$axios.$get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            console.log(result);
        }
    }
};
</script>