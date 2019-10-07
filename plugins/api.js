import Vue from "vue";
import { mapState } from "vuex";

Vue.mixin({
  computed: {
    ...mapState(["currentUser"])
  },
  methods: {
    apiGetCurrentUser() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            _id: "123123"
          });
        }, 500);
      });
    },
    apiGetUserIdListByRole(role) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([1, 2, 3]);
        }, 500);
      });
    }
  }
});
