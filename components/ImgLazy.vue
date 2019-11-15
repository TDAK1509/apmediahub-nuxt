<template>
  <img ref="lazyImg" />
</template>

<script>
export default {
  name: "ImgLazy",

  props: {
    lazySrc: String
  },

  data() {
    return {
      observer: null
    };
  },

  methods: {
    lazyLoad(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.setAttribute("src", this.lazySrc);
          this.observer.disconnect();
        }
      });
    }
  },

  mounted() {
    this.observer = new IntersectionObserver(this.lazyLoad);
    this.observer.observe(this.$refs.lazyImg);
  },

  destroy() {
    this.observer.disconnect();
  }
};
</script>