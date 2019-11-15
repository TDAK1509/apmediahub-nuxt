export default {
  methods: {
    async $_api_getCurrentUser() {
      const currentUser = await this.$axios.$get(
        "http://localhost:3001/currentUser"
      );
      return currentUser;
    },

    async $_api_updateContactList(contactList) {
      const currentUser = await this.$_api_getCurrentUser();
      currentUser.contact_list = contactList;

      const url = "http://localhost:3001/currentUser";

      const response = await this.$axios.post(url, currentUser);

      if (response.status === 201) {
        this.$store.commit("SET_CURRENT_USER", currentUser);

        return { success: true };
      }

      return { success: false, status: response.status };
    },

    async $_api_getUsers(userIdList) {
      const url = "http://localhost:3001/users";
      const users = await this.$axios.$get(url);
      return users;
    }
  }
};
