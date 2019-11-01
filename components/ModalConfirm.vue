<template>
    <div v-if="value">
        <h4>{{title}}</h4>
        <v-btn data-test="yesButton" @click="$emit('yes')">Yes</v-btn>
        <v-btn data-test="noButton" @click="close">No</v-btn>
    </div>
</template>

<script>
export default {
    name: "ModalConfirm",

    props: {
        title: String,
        value: {
            type: Boolean,
            default: false
        }
    },

    methods: {
        close() {
            this.$emit("input", false);
        }
    }
};
</script>

<style>
</style>