<template>
    <SelectWithPanel :items="serviceList" :label="label" @change="onChange" :rules="rules"></SelectWithPanel>
</template>

<script>
import clone from "lodash/clone";

export default {
    name: "ProjectCategory",

    props: {
        rules: Array
    },

    data() {
        return {
            services: {
                animation: false,
                audio_video_production: false,
                photography: false,
                logo_design_branding: false,
                graphic_design: false,
                collateral_design: false,
                art_illustration: false,
                voice_talent: false,
                brand_identity_strategy: false,
                motion_graphics: false,
                web_design: false,
                other: false
            }
        };
    },

    computed: {
        label() {
            return this.$t("post_project.project_category");
        },

        serviceKeyList() {
            return Object.keys(this.services);
        },

        serviceList() {
            return this.serviceKeyList.map(service => {
                const localeKey = `services.${service}`;

                return {
                    text: this.$t(localeKey),
                    value: service
                };
            });
        }
    },

    methods: {
        onChange(value) {
            const selectedServices = clone(this.services);

            value.forEach(key => {
                selectedServices[key] = true;
            });

            this.$emit("update:value", selectedServices);
        }
    }
};
</script>

<style>
</style>