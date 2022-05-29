import Vue from "vue";
import Router from "vue-router";

import singleSpaVue from "single-spa-vue";
import { BootstrapVue } from "bootstrap-vue";

import App from "./App.vue";
import Space from "./components/Space.vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(BootstrapVue);

const router = new Router({
  routes: [
    {
      path: "/space",
      name: "space",
      component: Space,
    },
  ],
});

const singleSpa = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
  },
});

export const bootstrap = [() => Promise.resolve()];
export const mount = [singleSpa.mount];
export const unmount = [singleSpa.unmount];
export const update = [singleSpa.update];
