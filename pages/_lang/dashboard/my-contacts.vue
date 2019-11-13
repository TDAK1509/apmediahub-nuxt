<template>
  <div>
    <CreateModal @save="createNewList"></CreateModal>
    <ContactList
      v-if="currentUser"
      :list="contactList"
      class="mt-5"
      @delete="deleteList"
    ></ContactList>
  </div>
</template>

<script>
import CreateModal from "@/components/dashboard/MyContactsTheCreateModal";
import ContactList from "@/components/dashboard/MyContactsTheContactList";
import mixinApi from "@/mixins/api";
import { mapState } from "vuex";

export default {
  name: "MyContacts",

  mixins: [mixinApi],

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

    currentContactList() {
      if (!this.currentUser) return [];
      return [...this.currentUser.contact_list];
    },

    contactList() {
      return [...this.newContactList, ...this.currentContactList];
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
  },

  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.$t("dashboard.my_contacts"));
  }
};
</script>
