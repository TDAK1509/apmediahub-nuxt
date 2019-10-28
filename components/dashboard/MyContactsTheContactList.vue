<template>
    <div>
        <ContactListRow v-for="l in list" :list-item="l"></ContactListRow>
    </div>
</template>

<script>
import ContactListRow from "./MyContactsTheContactListRow";

export default {
    name: "ContactList",

    components: {
        ContactListRow
    },

    props: {
        list: {
            type: Array,
            required: true
        }
    }
};
</script>

<style>
</style>