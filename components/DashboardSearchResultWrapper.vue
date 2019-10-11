<template>
    <div>
        <DashboardSearchResultItem
            v-for="user in users"
            :key="user._id"
            :user="user"
            :chipFieldName="chipFieldName"
            @checked="addToUserList(user._id)"
            @unchecked="removeFromUserList(user._id)"
        ></DashboardSearchResultItem>
    </div>
</template>

<script>
import DashboardSearchResultItem from "./DashboardSearchResultItem";

export default {
    name: "DashboardSearchResultWrapper",

    components: {
        DashboardSearchResultItem
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