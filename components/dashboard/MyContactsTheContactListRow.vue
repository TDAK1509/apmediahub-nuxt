<template>
    <div>
        {{listItem.name}}
        <button data-test="openButton" @click="open">Open</button>
        <button data-test="copyButton" @click="copy">Copy Emails</button>
        <button data-test="deleteButton" @click="deleteList">Delete</button>
    </div>
</template>

<script>
export default {
    name: "ContactListRow",

    props: {
        listItem: {
            type: Object,
            required: true
        }
    },

    methods: {
        open() {
            this.$router.push("/");
        },

        copy() {
            console.log("haha");
        },

        deleteList() {}
    }
};
</script>

<style>
</style>