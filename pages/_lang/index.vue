<template>
    <main>
        <h1>HOME</h1>

        <nuxt-link :to="`/${this.locale}/dashboard`">Dashboard</nuxt-link>
        <br />
        <nuxt-link :to="`/${this.locale}/login`">Login</nuxt-link>
        <br />
        <nuxt-link :to="`/${this.locale}/register`">Register</nuxt-link>
        <br />
    </main>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "Home",
    computed: {
        ...mapState(["locale"])
    }
};
</script>