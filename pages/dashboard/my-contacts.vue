<template>
    <div>
        <CreateModal @save="createNewList"></CreateModal>
        <ContactList v-if="currentUser" :list="contactList"></ContactList>
    </div>
</template>

<script>
import CreateModal from "@/components/dashboard/MyContactsTheCreateModal";
import ContactList from "@/components/dashboard/MyContactsTheContactList";
import mixinDashboardTitle from "~/mixins/dashboard-title";
import { mapState } from "vuex";

export default {
    name: "MyContacts",

    mixins: [mixinDashboardTitle],

    components: {
        CreateModal,
        ContactList
    },

    computed: {
        ...mapState(["currentUser"]),

        title() {
            return this.$t("dashboard.my_contacts");
        },

        contactList() {
            return this.currentUser.contact_list;
        }
    },

    methods: {
        createNewList(value) {
            const list = {
                id: this.currentUser.contact_list.length + 1,
                name: value,
                users: []
            };
            this.currentUser.contact_list.push(list);
        }
    }
};
</script>

<style>
</style>