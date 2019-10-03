<template>
    <v-menu
        v-model="showPicker"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
    >
        <template v-slot:activator="{ on }">
            <v-text-field
                v-model="dateValue"
                :label="$t('post_job.closing_date')"
                append-icon="mdi-calendar"
                readonly
                outlined
                :color="inputBorderColor"
                v-on="on"
            ></v-text-field>
        </template>
        <v-date-picker
            header-color="blue darken-3"
            color="blue darken-3"
            v-model="dateValue"
            @input="onDateChange"
        ></v-date-picker>
    </v-menu>
</template>

<script>
export default {
    data() {
        return {
            showPicker: false,
            dateValue: new Date().toISOString().substr(0, 10)
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    methods: {
        onDateChange(newDate) {
            this.showPicker = false;
            this.$emit("update:value", newDate);
        }
    }
};
</script>

<style>
</style>