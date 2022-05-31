import Vue from "vue";
import Home from "./components/Home.vue";
import singleSpaVue from "single-spa-vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(Home),
  },
});

export const name = "parcel-saturn";

export const bootstrap = singleSpa.bootstrap;
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
export const update = (args) =>
  Promise.resolve(console.log("Parcel Saturn", args));
