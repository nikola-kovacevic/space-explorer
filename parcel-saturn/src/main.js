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

export const mount = (args) =>
  Promise.resolve(console.log("[Parcel Saturn]", "Mounting parcel"))
    .then(() => singleSpa.mount(args))
    .then(() => console.log("[Parcel Saturn]", "Parcel mounted"));

export const unmount = (args) =>
  Promise.resolve(console.log("[Parcel Saturn]", "Unmounting parcel"))
    .then(() => singleSpa.unmount(args))
    .then(() => console.log("[Parcel Saturn]", "Parcel unmounted"));
