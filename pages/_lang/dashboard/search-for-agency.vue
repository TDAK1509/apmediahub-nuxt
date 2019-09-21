<template>
    <v-row align="center" justify="center">
        <v-col>
            <v-card>
                <DashboardContentTitle>{{title}}</DashboardContentTitle>

                <v-card-text>
                    <div class="d-flex justify-center">
                        <ButtonRadio name="search_by" id="country" :checked="true">Country</ButtonRadio>
                        <ButtonRadio name="search_by" id="city" class="ml-3">City</ButtonRadio>
                        <ButtonRadio name="search_by" id="services" class="ml-3">Services</ButtonRadio>
                    </div>

                    <v-select
                        :items="country"
                        :menu-props="{ offsetY: true}"
                        label="Country"
                        outlined
                    ></v-select>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import DashboardContentTitle from "@/components/DashboardContentTitle";

export default {
    name: "SearchForAgency",

    components: {
        DashboardContentTitle
    },

    computed: {
        title() {
            return this.$t("common.search") + " " + this.$t("user.role.agency");
        },

        country() {
            return ["Vietnam", "Cambodia", "China"];
        }
    }
};
</script>

<style>
</style>