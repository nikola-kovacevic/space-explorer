import Vue from "vue";
import Home from "./components/Home.vue";
import singleSpaVue from "single-spa-vue";

Vue.config.productionTip = false;

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(Home),
  },
});

export const name = "vue-parcel2";

export const bootstrap = singleSpa.bootstrap;

export const mount = singleSpa.mount;

export const unmount = singleSpa.unmount;
