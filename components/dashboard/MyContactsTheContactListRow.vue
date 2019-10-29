<template>
    <div class="container d-flex justify-space-between align-center">
        <div class="list flex-grow-1 d-flex justify-space-between align-center">
            <div class="subtitle-2">{{listItem.name}}</div>

            <div class="d-flex justify-space-between align-center black--text">
                <span data-test="userCount">{{listItem.users.length}}</span>
                <v-icon right color="black">mdi-account</v-icon>
            </div>
        </div>

        <div class="actions">
            <v-btn data-test="openButton" color="grey lighten-2" class="ml-10" @click="open">
                <v-icon left>mdi-content-copy</v-icon>
                {{$t("open")}}
            </v-btn>

            <v-btn data-test="copyButton" color="grey lighten-2" class="ml-10" @click="copy">
                <v-icon left>mdi-content-copy</v-icon>
                {{$t("copy")}}
            </v-btn>

            <v-btn
                icon
                small
                color="primary"
                data-test="deleteButton"
                class="ml-10"
                @click="deleteList"
            >
                <v-icon>mdi-trash-can-outline</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactListRow",

    props: {
        listItem: {
            type: Object,
            required: true
        }
    },

    methods: {
        open() {
            this.$router.push("/");
        },

        copy() {
            console.log("haha");
        },

        deleteList() {}
    }
};
</script>

<i18n>
{
    "en": {
        "open": "View",
        "copy": "Copy emails"
    },

    "vn": {
        "open": "Xem",
        "copy": "Sao chép email"
    }
}
</i18n>