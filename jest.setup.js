import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";
import { mount } from "@vue/test-utils";

Vue.use(Vuetify);
Vue.use(Vuex);

const state = {
  inputBorderColor: ""
};

const store = new Vuex.Store({ state });

const factory = (Component, values = {}) => {
  return mount(Component, {
    mocks: {
      $t: () => {}
    },

    store,

    data() {
      return {
        ...values
      };
    }
  });
};

global.factory = factory;
