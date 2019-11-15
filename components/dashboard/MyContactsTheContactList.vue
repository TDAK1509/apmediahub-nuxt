<template>
  <div>
    <ContactListRow
      v-for="l in list"
      :list-item="l"
      :key="l._id"
      class="contact-list-row"
      @delete="deleteList(l._id)"
    ></ContactListRow>
  </div>
</template>

<script>
import ContactListRow from "./MyContactsTheContactListRow";

export default {
  name: "ContactList",

  components: {
    ContactListRow
  },

  props: {
    list: {
      type: Array,
      required: true
    }
  },

  methods: {
    deleteList(listId) {
      this.$emit("delete", listId);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-list-row {
  &:not(:last-child) {
    border-bottom: 1px solid #e4e4e4;
  }

  &:hover {
    background: #e7e7e7;
  }
}
</style>