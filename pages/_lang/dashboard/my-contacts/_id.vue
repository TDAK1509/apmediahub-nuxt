<template>
  <div>
    <user-list
      v-if="users.length"
      :users="users"
      :value.sync="selectedUserList"
      chip-field-name="services"
    />
  </div>
</template>

<script>
import mixinApi from "@/mixins/api";
import clone from "lodash/clone";
import { mapState } from "vuex";
import UserList from "@/components/dashboard/DashboardUserList";

export default {
  name: "MyContactsDetails",

  components: {
    UserList
  },

  mixins: [mixinApi],

  async asyncData({ params }) {
    return {
      listId: params.id
    };
  },

  data() {
    return {
      users: [],
      selectedUserList: []
    };
  },

  computed: {
    ...mapState(["currentUser"]),

    contactList() {
      if (!this.currentUser) return null;

      const contactList = this.currentUser.contact_list.find(
        item => item._id === this.listId
      );

      return contactList;
    },

    usersInContactList() {
      if (!this.contactList) return null;
      return this.contactList.users;
    }
  },

  watch: {
    contactList() {
      this.setPagetitle();
    },

    usersInContactList: {
      immediate: true,
      async handler() {
        this.users = await this.getUsers();
      }
    }
  },

  methods: {
    setPagetitle() {
      if (this.contactList)
        this.$store.commit("SET_PAGE_TITLE", this.contactList.name);
    },

    async getUsers() {
      const users = await this.$_api_getUsers(this.usersInContactList);
      return users;
    }
  },

  mounted() {
    this.setPagetitle();
  }
};
</script>

<style>
</style>