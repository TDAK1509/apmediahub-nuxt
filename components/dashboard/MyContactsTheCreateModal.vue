<template>
    <div class="text-left">
        <v-btn data-test="createButton" color="primary" @click="showModal = true">
            <v-icon left>mdi-plus</v-icon>
            {{ $t("create_new_list") }}
        </v-btn>

        <ModalPopup v-model="showModal" :title="$t('create_new_list')">
            <div class="text-center">
                <v-text-field
                    data-test="listNameInput"
                    label="Contact list name"
                    v-model="listName"
                ></v-text-field>

                <v-btn data-test="saveButton" color="primary" @click="save">{{$t("save")}}</v-btn>
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

<i18n>
{
    "en": {
        "create_new_list": "Create a new contact list",
        "save": "Save",
        "cancel": "Cancel",
        "contact_list_name": "Contact list name"
    },

    "vn": {
        "create_new_list": "Tạo danh bạ mới",
        "save": "Lưu",
        "cancel": "Hủy",
        "contact_list_name": "Tên danh bạ"
    }
}
</i18n>