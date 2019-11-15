<template>
  <div class="d-flex flex-column">
    <the-project-row v-for="p in projectList" :key="p._id" :data="p" class="project-row"></the-project-row>
  </div>
</template>

<script>
import TheProjectRow from "@/components/dashboard/MyProjectsTheProjectRow";
import mixinApi from "@/mixins/api";
import { mapState } from "vuex";

export default {
  name: "MyProjects",

  components: {
    TheProjectRow
  },

  mixins: [mixinApi],

  computed: {
    ...mapState(["currentUser"]),

    projectList() {
      if (!this.currentUser) return [];
      return this.currentUser.project_list;
    }
  },

  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.$t("dashboard.my_projects"));
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