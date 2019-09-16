export default {
  methods: {
    shakeItOff(el) {
      el.classList.add("shake");
      setTimeout(() => {
        el.classList.remove("shake");
      }, 500);
    }
  }
};
