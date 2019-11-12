export default {
  filters: {
    replaceUnderscoreWithSpace(value) {
      return value.split("_").join(" ");
    }
  }
};
