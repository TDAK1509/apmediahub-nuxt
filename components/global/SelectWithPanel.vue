<template>
    <div class="d-flex flex-column">
        <v-select
            v-model="value"
            :items="items"
            chips
            :label="label"
            multiple
            outlined
            color="blue darken-3"
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
    }
};
</script>

<style>
</style>