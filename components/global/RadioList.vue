<template>
    <v-radio-group v-model="radio" column class="flex-grow-1 mt-2 pt-0" @change="onChangeRadio">
        <v-radio
            v-for="(item, i) in list"
            :key="i"
            :label="item.text"
            :value="item.value"
            :color="inputBorderColor"
        ></v-radio>
    </v-radio-group>
</template>

<script>
export default {
    name: "RadioList",

    props: {
        list: Array
    },

    data() {
        return {
            radio: ""
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    methods: {
        onChangeRadio(value) {
            this.$emit("update:value", value);
        }
    }
};
</script>

<style>
</style>