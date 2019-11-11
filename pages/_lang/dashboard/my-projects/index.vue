<template>
  <div>
    <the-project-row v-for="p in projectList" :key="p.id" :data="p"></the-project-row>
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

  data() {
    return {
      projectList: []
    }
  },

  computed: {
    ...mapState(["currentUser"])
  },

  watch: {
    currentUser: function(newValue) {
      if (!!newValue.project_list) {
        this.projectList = newValue.project_list;
      }
    }
  }
}
</script>

<style>

</style>