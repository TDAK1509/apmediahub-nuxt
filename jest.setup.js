import Vue from "vue";
import Vuetify from "vuetify";
import Vuex from "vuex";

import { mount, shallowMount } from "@vue/test-utils";

Vue.use(Vuetify);
Vue.use(Vuex);

const state = {
  inputBorderColor: ""
};

const mutations = {
  SET_PAGE_TITLE() {}
};

const store = new Vuex.Store({ state, mutations });

const factory = (Component, options = {}) => {
  return mount(Component, {
    mocks: {
      $t: () => {}
    },

    store,

    ...options
  });
};

const shallowFactory = (Component, options = {}) => {
  return shallowMount(Component, {
    mocks: {
      $t: () => {}
    },

    store,

    ...options
  });
};

global.factory = factory;
global.shallowFactory = shallowFactory;
