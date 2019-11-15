<template>
  <div class>
    <div class="item-row mb-4" v-for="(value, key) in projectDataBeautified" :key="key">
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
  name: "ProjectBody",

  props: {
    projectData: {
      type: Object,
      required: true
    }
  },

  mixins: [mixinFilters],

  data() {
    return {
      projectDataBeautified: null
    };
  },

  methods: {
    beautifyProjectData() {
      const data = clone(this.projectData);
      delete data._id;
      delete data.who_can_see;

      // Translate data having locale keys
      data.services = data.services.map(localeKey => {
        return this.$t(localeKey);
      });

      const dataToBeTranslated = [
        "service_level",
        "project_type",
        "duration",
        "time_requirement"
      ];

      dataToBeTranslated.forEach(key => {
        data[key] = this.$t(data[key]);
      });

      // Payment
      const paymentType = this.$t(data.payment.type);
      const paymentAmount = data.payment.amount;
      data.payment = `${paymentType}: ${paymentAmount}`;

      this.projectDataBeautified = data;
    }
  },

  mounted() {
    this.beautifyProjectData();
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