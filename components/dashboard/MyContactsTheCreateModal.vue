<template>
    <div class="text-left">
        <v-btn data-test="createButton" color="primary" @click="showModal = true">
            <v-icon left>mdi-plus</v-icon>
            {{ $t("create") }}
        </v-btn>

        <ModalPopup v-model="showModal" :title="$t('create')">
            <div class="text-center">
                <v-text-field
                    data-test="listNameInput"
                    label="Contact list name"
                    v-model="listName"
                ></v-text-field>

                <v-btn data-test="saveButton" color="primary" @click="save">Save</v-btn>
            </div>
        </ModalPopup>
    </div>
</template>

<script>
import ModalPopup from "@/components/ModalPopup";

export default {
    name: "CreateModal",

    components: {
        ModalPopup
    },

    data() {
        return {
            showModal: false,

            listName: ""
        };
    },

    methods: {
        save() {
            this.$emit("save", this.listName);
            this.showModal = false;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>

<i18n>
{
    "en": {
        "create": "Create a new contact list",
        "save": "Save",
        "cancel": "Cancel"
    },

    "vn": {
        "create": "Tạo danh bạ mới",
        "save": "Lưu",
        "cancel": "Hủy"
    }
}
</i18n>