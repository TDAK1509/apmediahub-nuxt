<template>
  <div class="text-left">
    <project-body :project-data="projectData" v-if="projectData" />
  </div>
</template>

<script>
import mixinApi from "@/mixins/api";
import { mapState } from "vuex";
import ProjectBody from "@/components/dashboard/MyProjectsDetailsTheProjectBody";

export default {
  name: "MyProjectsDetail",

  components: {
    ProjectBody
  },

  mixins: [mixinApi],

  computed: {
    ...mapState(["currentUser"]),

    projectId() {
      return this.$route.params.id;
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
    projectData() {
      this.setPagetitle();
    }
  },

  methods: {
    setPagetitle() {
      if (this.projectData)
        this.$store.commit("SET_PAGE_TITLE", this.projectData.project_name);
    }
  },

  mounted() {
    this.setPagetitle();
  }
};
</script>

<style>
</style>