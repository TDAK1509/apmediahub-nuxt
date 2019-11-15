<template>
  <div class="text-left">
    <v-btn data-test="createButton" color="primary" @click="showModal = true">
      <v-icon left>mdi-plus</v-icon>
      {{ $t("my_contacts.create_new_list") }}
    </v-btn>

    <ModalPopup
      v-model="showModal"
      :title="$t('my_contacts.create_new_list')"
      data-test="createModal"
    >
      <v-form class="text-center" ref="form">
        <v-text-field
          data-test="listNameInput"
          label="Contact list name"
          v-model="listName"
          :rules="[inputRules.required]"
        ></v-text-field>

        <v-btn data-test="saveButton" color="primary" @click="save">{{
          $t("common.save")
        }}</v-btn>
      </v-form>
    </ModalPopup>
  </div>
</template>

<script>
import ModalPopup from "@/components/ModalPopup";
import mixinInputRules from "@/mixins/input-rules";

export default {
  name: "CreateModal",

  components: {
    ModalPopup
  },

  mixins: [mixinInputRules],

  data() {
    return {
      showModal: false,

      listName: ""
    };
  },

  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$emit("save", this.listName);
        this.showModal = false;
      }
    }
  }
};
</script>
