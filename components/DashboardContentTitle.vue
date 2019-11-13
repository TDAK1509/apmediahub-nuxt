<template>
  <v-card-title class="d-flex" data-test="pageTitle">
    <div class="flex-grow-1 pb-3 text-capitalize title-container">{{ dashboardPageTitle }}</div>
  </v-card-title>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DashboardContentTitle",

  computed: {
    ...mapState(["dashboardPageTitle"])
  },

  methods: {
    updatePageTitle(value) {
      this.$store.commit("SET_PAGE_TITLE", value);
    }
  },

  mounted() {
    this.$root.$on("PAGE_TITLE_CHANGE", this.updatePageTitle);
  }
};
</script>

<style lang="scss" scoped>
.title-container {
  border-bottom: 4px solid #e0e0e0;
}
</style>