<template>
  <div>
    <user-list-item
      v-for="user in users"
      :key="user._id"
      :user="user"
      :chipFieldName="chipFieldName"
      @checked="addToUserList(user._id)"
      @unchecked="removeFromUserList(user._id)"
    />
  </div>
</template>

<script>
import UserListItem from "./DashboardUserListItem";

export default {
  name: "UserList",

  components: {
    UserListItem
  },

  props: {
    users: Array,
    chipFieldName: String
  },

  data() {
    return {
      userIdList: []
    };
  },

  methods: {
    addToUserList(userId) {
      this.userIdList.push(userId);
    },

    removeFromUserList(userId) {
      const index = this.userIdList.indexOf(userId);
      this.userIdList.splice(index, 1);
    }
  },

  watch: {
    userIdList(newValue, oldValue) {
      this.$emit("update:value", newValue);
    }
  }
};
</script>

<style>
</style>