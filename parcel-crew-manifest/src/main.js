import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import { BootstrapVue } from "bootstrap-vue";

import "../assets/styles/style.scss";

import { log } from "./services/log";

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
  Promise.resolve(log("Mounting parcel"))
    .then(() => singleSpa.mount(args))
    .then(() => log("Parcel mounted"));

export const unmount = (args) =>
  Promise.resolve(log("Unmounting parcel"))
    .then(() => singleSpa.unmount(args))
    .then(() => log("Parcel unmounted"));
