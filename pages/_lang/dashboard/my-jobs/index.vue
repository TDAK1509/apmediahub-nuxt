<template>
  <div>
    <the-job-row v-for="p in jobList" :key="p.id" :data="p" class="job-row" />
  </div>
</template>

<script>
import TheJobRow from "@/components/dashboard/MyJobsTheJobRow";
import mixinDashboardTitle from "~/mixins/dashboard-title";
import { mapState } from "vuex";

export default {
  name: "MyJobs",

  components: {
    TheJobRow
  },

  computed: {
    ...mapState(["currentUser"]),

    jobList() {
      if (!this.currentUser) return [];
      return this.currentUser.job_list;
    }
  },

  mounted() {
    this.$store.commit("SET_PAGE_TITLE", this.$t("dashboard.my_jobs"));
  }
};
</script>

<style lang="scss" scoped>
.job-row {
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