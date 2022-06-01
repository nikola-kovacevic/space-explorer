import Vue from "vue";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
  },
});

export const name = "parcel-saturn";

export const bootstrap = singleSpa.bootstrap;

export const mount = (args) =>
  Promise.resolve(console.log("[Parcel Saturn]", "Mounting parcel"))
    .then(() => singleSpa.mount(args))
    .then(() => console.log("[Parcel Saturn]", "Parcel mounted"));

export const unmount = (args) =>
  Promise.resolve(console.log("[Parcel Saturn]", "Unmounting parcel"))
    .then(() => singleSpa.unmount(args))
    .then(() => console.log("[Parcel Saturn]", "Parcel unmounted"));
