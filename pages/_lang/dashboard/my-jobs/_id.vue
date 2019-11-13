<template>
  <div class="text-left">
    <button @click="setPagetitle">haha</button>
    <the-job-body :job-data="jobData" v-if="jobData" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import TheJobBody from "@/components/dashboard/MyJobsDetailsTheJobBody";

export default {
  name: "MyJobsDetails",

  components: {
    TheJobBody
  },

  computed: {
    ...mapState(["currentUser"]),

    jobId() {
      return this.$route.params.id;
    },

    jobData() {
      if (!this.currentUser) return null;

      const jobData = this.currentUser.job_list.find(
        item => item.id === this.jobId
      );

      return jobData;
    }
  },

  watch: {
    jobData() {
      this.setPagetitle();
    }
  },

  methods: {
    setPagetitle() {
      if (this.jobData)
        this.$store.commit("SET_PAGE_TITLE", this.jobData.job_title);
    }
  },

  mounted() {
    this.setPagetitle();
  }
};
</script>

<style>
</style>