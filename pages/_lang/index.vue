<template>
    <main>
        <h1>HOME</h1>

        <nuxt-link :to="`/${locale}/dashboard`">Dashboard</nuxt-link>
        <br />
        <nuxt-link :to="`/${locale}/login`">Login</nuxt-link>
        <br />
        <nuxt-link :to="`/${locale}/register`">Register</nuxt-link>
        <br />
    </main>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState(["locale"])
    }
};
</script>