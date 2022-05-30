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

export const name = "parcel-saturn";

export const bootstrap = [() => Promise.resolve()];
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
export const update = (args) =>
  Promise.resolve("Parcel Saturn", console.log(args));
