<template>
  <div class="d-flex flex-column">
    <the-project-row v-for="p in projectList" :key="p.id" :data="p" class="project-row"></the-project-row>
  </div>
</template>

<script>
import TheProjectRow from "@/components/dashboard/MyProjectsTheProjectRow";
import mixinApi from "@/mixins/api";
import mixinDashboardTitle from "~/mixins/dashboard-title";
import { mapState } from "vuex";

export default {
  name: "MyProjects",

  components: {
    TheProjectRow
  },

  mixins: [mixinApi, mixinDashboardTitle],

  computed: {
    ...mapState(["currentUser"]),

    title() {
      return this.$t("dashboard.my_projects");
    },

    projectList() {
      if (!this.currentUser) return [];
      return this.currentUser.project_list;
    }
  }
};
</script>

<style lang="scss" scoped>
.project-row {
  border-bottom: 1px solid #ccc;

  &:first-child {
    border-top: 1px solid #ccc;
  }

  &:nth-child(odd) {
    background: #fff;
  }

  &:hover {
    background: #d6d6d6;
  }
}
</style>