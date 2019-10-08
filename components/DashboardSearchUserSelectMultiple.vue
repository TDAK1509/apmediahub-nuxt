<template>
    <div class="d-flex flex-column">
        <h4 class="subhead mb-1">{{ label }}</h4>

        <v-select
            v-model="value"
            :items="items"
            :label="label"
            multiple
            solo
            :color="inputBorderColor"
            @change="$emit('update:value', value)"
            :rules="rules"
            :menu-props="{offsetY: true, transition: 'slide-y-reverse-transition'}"
        ></v-select>
    </div>
</template>

<script>
export default {
    name: "SearchUserSelectMultiple",

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