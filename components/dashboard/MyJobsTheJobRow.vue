<template>
  <div class="d-flex align-center">
    <v-icon color="black" small>mdi-chevron-right</v-icon>

    <nuxt-link
      data-test="jobRow"
      :to="{ name: 'lang-dashboard-my-jobs-id', params: { id: data._id } }"
      class="job-row py-2 text-left"
    >{{ data.job_title }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TheJobRow",

  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.job-row {
  text-decoration: none;
  color: #000;

  &:hover {
    color: #c80000;
  }
}
</style>