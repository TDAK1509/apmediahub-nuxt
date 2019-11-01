<template>
    <div>
        <CreateModal @save="createNewList"></CreateModal>
        <ContactList v-if="currentUser" :list="contactList" class="mt-5" @delete="deleteList"></ContactList>
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
            newContactList: [],
            currentContactList: []
        };
    },

    computed: {
        ...mapState(["currentUser"]),

        title() {
            return this.$t("title");
        },

        contactList() {
            return [...this.newContactList, ...this.currentContactList];
        }
    },

    watch: {
        currentUser(newValue, oldValue) {
            if (newValue) {
                this.currentContactList = [...this.currentUser.contact_list];
            }
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
        },

        async deleteList(listId) {
            this.newContactList = this.newContactList.filter(
                item => item.id != listId
            );
            this.currentContactList = this.currentContactList.filter(
                item => item.id != listId
            );

            await this.$api_updateContactList(this.contactList);
        }
    }
};
</script>

<i18n>
{
    "en": {
        "title": "My contacts"
    },

    "vn": {
        "title": "Danh bạ của tôi"
    }
}
</i18n>