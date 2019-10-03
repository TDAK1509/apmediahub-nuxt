<template>
    <div class="d-flex flex-column">
        <v-select
            v-model="value"
            :items="items"
            chips
            :label="label"
            multiple
            outlined
            :color="inputBorderColor"
            @change="$emit('change', value)"
            :rules="rules"
            :menu-props="{offsetY: true, transition: 'slide-y-reverse-transition'}"
        ></v-select>
    </div>
</template>

<script>
export default {
    name: "SelectWithPanel",

    props: {
        items: Array,
        label: {
            type: String,
            default: "Select with panel"
        },
        rules: Array
    },

    data() {
        return {
            value: ""
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    }
};
</script>

<style>
</style>