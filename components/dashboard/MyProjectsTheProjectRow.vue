<template>
  <div class="d-flex align-center">
    <v-icon color="black" small>mdi-chevron-right</v-icon>

    <nuxt-link
      data-test="projectRow"
      :to="data.id"
      class="project-row py-2 text-left"
    >{{ data.project_name }}</nuxt-link>
  </div>
</template>

<script>
export default {
  name: "TheProjectRow",

  props: {
    data: Object
  }
};
</script>

<style lang="scss" scoped>
.project-row {
  text-decoration: none;
  color: #000;

  &:hover {
    color: #c80000;
  }
}
</style>