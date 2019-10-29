export default {
    methods: {
        async $api_getCurrentUser() {
            if (process.env.NODE_ENV !== "production") {
                const currentUser = await this.$axios.$get(
                    "http://localhost:3001/currentUser"
                );
                return currentUser;
            }
        },

        async $api_updateContactList(contactList) {
            if (process.env.NODE_ENV !== "production") {
                const currentUser = await this.$api_getCurrentUser();
                currentUser.contact_list = contactList;

                const url = "http://localhost:3001/currentUser";

                const response = await this.$axios.post(url, currentUser);
                console.log(response);
                return response;
            }
        }
    }
};
