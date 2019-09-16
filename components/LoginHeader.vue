<template>
    <v-container fluid class="form-header d-flex justify-space-between align-center px-0">
        <div class="item">
            <nuxt-link :to="`/${locale}`">
                <v-img src="../logo.jpg" width="50" height="50"></v-img>
            </nuxt-link>
        </div>
        <div class="item heading">
            <h4 class="mx-5">
                <slot></slot>
            </h4>
        </div>
        <div class="item">
            <LanguageSwitcher />
        </div>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "LoginHeader",

    computed: {
        ...mapState(["locale"])
    }
};
</script>

<style>
</style>