<template>
    <div>
        <CreateModal @save="createNewList"></CreateModal>
        <ContactList v-if="currentUser" :list="contactList" class="mt-5"></ContactList>
    </div>
</template>

<script>
import CreateModal from "@/components/dashboard/MyContactsTheCreateModal";
import ContactList from "@/components/dashboard/MyContactsTheContactList";
import mixinDashboardTitle from "~/mixins/dashboard-title";
import mixinApi from "@/mixins/api";
import { mapState } from "vuex";

export default {
    name: "MyContacts",

    mixins: [mixinDashboardTitle, mixinApi],

    components: {
        CreateModal,
        ContactList
    },

    data() {
        return {
            newContactList: []
        };
    },

    computed: {
        ...mapState(["currentUser"]),

        title() {
            return this.$t("dashboard.my_contacts");
        },

        contactList() {
            return [...this.newContactList, ...this.currentUser.contact_list];
        }
    },

    methods: {
        async createNewList(value) {
            const list = {
                id: this.currentUser.contact_list.length + 1,
                name: value,
                users: []
            };

            this.newContactList.push(list);

            await this.$api_updateContactList(this.contactList);
        }
    }
};
</script>

<style>
</style>