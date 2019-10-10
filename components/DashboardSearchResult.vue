<template>
    <v-card>
        <input type="checkbox" />
        <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>
    </v-card>
</template>

<script>
export default {
    name: "SearchResult",

    props: {
        user: Object
    }
};
</script>

<style>
</style>