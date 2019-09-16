import Vue from "vue";
import LanguageSwitcher from "~/components/global/LanguageSwitcher";

const components = { LanguageSwitcher };

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
