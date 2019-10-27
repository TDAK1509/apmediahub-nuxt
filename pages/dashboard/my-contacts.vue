<template>
    <div>
        <CreateModal @save="createNewList"></CreateModal>
        <ContactList :list="contactList"></ContactList>
    </div>
</template>

<script>
import CreateModal from "@/components/dashboard/MyContactsTheCreateModal";
import ContactList from "@/components/dashboard/MyContactsTheContactList";
import mixinDashboardTitle from "~/mixins/dashboard-title";

export default {
    name: "MyContacts",

    mixins: [mixinDashboardTitle],

    components: {
        CreateModal,
        ContactList
    },

    data() {
        return {
            currentUser: {
                contact_list: [
                    {
                        id: 1,
                        name: "List 1",
                        users: [1, 2]
                    }
                ]
            }
        };
    },

    computed: {
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