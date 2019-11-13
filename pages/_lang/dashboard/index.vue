<template>
  <h1>Dashboard overview</h1>
</template>

<script>
export default {
  name: "DashboardOverview",

  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.$t("dashboard.dashboard"));
  }
};
</script>

<style>
</style>