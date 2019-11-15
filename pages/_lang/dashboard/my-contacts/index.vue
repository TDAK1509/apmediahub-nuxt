<template>
  <div>
    <CreateModal @save="createNewList"></CreateModal>
    <ContactList v-if="currentUser" :list="contactList" class="mt-5" @delete="deleteList"></ContactList>
  </div>
</template>

<script>
import CreateModal from "@/components/dashboard/MyContactsTheCreateModal";
import ContactList from "@/components/dashboard/MyContactsTheContactList";
import mixinApi from "@/mixins/api";
import { mapState } from "vuex";
import clone from "lodash/clone";

export default {
  name: "MyContacts",

  mixins: [mixinApi],

  components: {
    CreateModal,
    ContactList
  },

  computed: {
    ...mapState(["currentUser"]),

    contactList() {
      if (!this.currentUser) return [];
      return this.currentUser.contact_list;
    }
  },

  methods: {
    async createNewList(value) {
      const list = {
        _id: this.currentUser.contact_list.length + 1,
        name: value,
        users: [],
        created_at: new Date().toISOString().substr(0, 10)
      };

      const contactList = [list, ...this.contactList];

      try {
        const response = await this.$_api_updateContactList(contactList);

        if (!response.success) {
          throw response;
        }
      } catch (error) {
        const statusCode = error.status || 0;
        this.handlerError(statusCode);
      }
    },

    async deleteList(listId) {
      const contactList = this.contactList.filter(item => item._id !== listId);

      try {
        const response = await this.$_api_updateContactList(contactList);

        if (!response.success) {
          throw response;
        }
      } catch (error) {
        const statusCode = error.status || 0;
        this.handlerError(statusCode);
      }
    },

    handlerError(statusCode) {
      console.log(statusCode);
    }
  },

  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.$t("dashboard.my_contacts"));
  }
};
</script>
