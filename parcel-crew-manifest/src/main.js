import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import { BootstrapVue } from "bootstrap-vue";

import "../assets/styles/style.scss";

import Home from "./components/Home.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(Home),
  },
});

export const name = "parcel-crew-manifest";

export const bootstrap = singleSpa.bootstrap;
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
export const update = (args) =>
  Promise.resolve(console.log("Parcel Crew Manifest", args));
