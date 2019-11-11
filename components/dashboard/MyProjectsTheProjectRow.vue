<template>
  <nuxt-link data-test="projectRow" :to="`my-projects/${data.id}`">
    {{ data.name }}
  </nuxt-link>
</template>

<script>
export default {
  name: "TheProjectRow",

  props: {
    data: Object
  }
}
</script>

<style>

</style>