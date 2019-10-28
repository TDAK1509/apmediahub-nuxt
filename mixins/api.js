export default {
    methods: {
        async $api_getCurrentUser() {
            if (process.env.NODE_ENV !== "production") {
                const currentUser = await this.$axios.$get(
                    "http://localhost:3001/currentUser"
                );
                return currentUser;
            }
        }
    }
};
