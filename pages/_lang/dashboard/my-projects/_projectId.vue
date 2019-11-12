<template>
  <div class="text-left">
    <project-body :project-data="projectData" v-if="projectData" />
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
      if (!this.projectData) return "";
      return this.projectData.project_name;
    },

    projectId() {
      return this.$route.params.projectId;
    },

    projectData() {
      if (!this.currentUser) return null;

      const projectData = this.currentUser.project_list.find(
        item => item.id === this.projectId
      );

      return projectData;
    }
  },

  watch: {
    title(newValue) {
      this.$store.commit("SET_PAGE_TITLE", newValue);
    }
  }
};
</script>

<style>
</style>