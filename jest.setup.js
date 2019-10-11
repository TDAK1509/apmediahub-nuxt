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

const factory = (Component, props = {}) => {
  return mount(Component, {
    mocks: {
      $t: () => {}
    },

    store,

    propsData: props
  });
};

const shallowFactory = (Component, props = {}) => {
  return shallowMount(Component, {
    mocks: {
      $t: () => {}
    },

    store,
    propsData: props
  });
};

global.factory = factory;
global.shallowFactory = shallowFactory;
