import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import { BootstrapVue } from "bootstrap-vue";

import "../assets/styles/style.scss";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
  },
});

export const name = "parcel-crew-manifest";

export const bootstrap = singleSpa.bootstrap;

export const mount = (args) =>
  Promise.resolve(console.log("[Parcel Crew Manifest]", "Mounting parcel"))
    .then(() => singleSpa.mount(args))
    .then(() => console.log("[Parcel Crew Manifest]", "Parcel mounted"));

export const unmount = (args) =>
  Promise.resolve(console.log("[Parcel Crew Manifest]", "Unmounting parcel"))
    .then(() => singleSpa.unmount(args))
    .then(() => console.log("[Parcel Crew Manifest]", "Parcel unmounted"));
