<template>
  <div class>
    <div class="item-row mb-4" v-for="(value, key) in jobDataBeautified" :key="key">
      <div class="sub-title-1 text-proper">{{ key | replaceUnderscoreWithSpace }}</div>

      <div class="content body-2">
        <ul v-if="Array.isArray(value)">
          <li v-for="item in value" :key="item">{{ item }}</li>
        </ul>

        <span v-else>{{ value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import mixinFilters from "@/mixins/filters";
import clone from "lodash/clone";

export default {
  name: "JobBody",

  props: {
    jobData: {
      type: Object,
      required: true
    }
  },

  mixins: [mixinFilters],

  data() {
    return {
      jobDataBeautified: null
    };
  },

  methods: {
    beautifyjobData() {
      const data = clone(this.jobData);
      delete data.id;
      delete data.who_can_see;

      // Translate data having locale keys
      const dataToBeTranslated = ["job_type"];

      dataToBeTranslated.forEach(key => {
        data[key] = this.$t(data[key]);
      });

      this.jobDataBeautified = data;
    }
  },

  mounted() {
    this.beautifyjobData();
  }
};
</script>

<style lang="scss" scoped>
.text-proper {
  text-transform: capitalize;
}

.content {
  color: #7f7f7f;
}
</style>