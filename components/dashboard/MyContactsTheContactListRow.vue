<template>
  <div class="container d-flex justify-space-between align-center">
    <div class="list flex-grow-1 d-flex justify-space-between align-center">
      <div class="subtitle-2" data-test="listName">{{ listItem.name }}</div>

      <div class="d-flex justify-space-between align-center black--text">
        <span data-test="userCount">{{ listItem.users.length }}</span>
        <v-icon right color="black">mdi-account</v-icon>
      </div>
    </div>

    <div class="actions">
      <v-btn
        data-test="openButton"
        color="grey lighten-2"
        class="ml-10"
        nuxt-link
        :to="{ name: 'lang-dashboard-my-contacts-id', params: { id: listItem._id } }"
      >
        <v-icon left>mdi-content-copy</v-icon>
        {{ $t("common.open") }}
      </v-btn>

      <v-btn data-test="copyButton" color="grey lighten-2" class="ml-10" @click="copy">
        <v-icon left>mdi-content-copy</v-icon>
        {{ $t("common.copy") }}
      </v-btn>

      <v-btn
        icon
        small
        color="primary"
        data-test="deleteButton"
        class="ml-10"
        @click="showDeleteConfirmModal"
      >
        <v-icon>mdi-trash-can-outline</v-icon>
      </v-btn>
    </div>

    <ModalConfirm
      v-model="confirmModalIsShow"
      data-test="confirmModal"
      @yes="deleteList"
      :message="$t('my_contacts.confirm_delete')"
    ></ModalConfirm>
  </div>
</template>

<script>
import ModalConfirm from "@/components/ModalConfirm";

export default {
  name: "ContactListRow",

  components: {
    ModalConfirm
  },

  props: {
    listItem: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      confirmModalIsShow: false
    };
  },

  methods: {
    copy() {
      console.log("haha");
    },

    showDeleteConfirmModal() {
      this.confirmModalIsShow = true;
    },

    deleteList() {
      this.$emit("delete", this.listItem.id);
    }
  }
};
</script>
