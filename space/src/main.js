import Vue from "vue";
import Router from "vue-router";

import singleSpaVue from "single-spa-vue";

import App from "./App.vue";
import Space from "./components/Space.vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      path: "*",
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

export const bootstrap = singleSpa.bootstrap;
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
export const update = singleSpa.update;
