import Vue from "vue";
import Router from "vue-router";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

Vue.use(Router);

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
  },
});

export const bootstrap = singleSpa.bootstrap;
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
export const update = singleSpa.update;
