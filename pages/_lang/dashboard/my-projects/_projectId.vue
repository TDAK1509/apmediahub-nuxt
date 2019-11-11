<template>
  <div class="text-left">
    <project-body></project-body>
  </div>
</template>

<script>
import mixinApi from "@/mixins/api";
import mixinDashboardTitle from "~/mixins/dashboard-title";
import { mapState } from "vuex";
import ProjectBody from "@/components/dashboard/MyProjectsDetailsTheProjectBody";

export default {
  name: "MyProjectsDetail",

  components: {
    ProjectBody
  },

  mixins: [mixinApi, mixinDashboardTitle],

  computed: {
    ...mapState(["currentUser"]),

    title() {
      return this.$t("dashboard.my_projects");
    },

    projectId() {
      return this.$route.params.projectId;
    },

    project() {
      return this.currentUser.project_list[this.projectId] || null;
    }
  }
};
</script>

<style>
</style>