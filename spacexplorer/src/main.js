import Vue from "vue";
import Router from "vue-router";

import singleSpaVue from "single-spa-vue";
import { Rocket } from "vue-icon-packs/oc";
import { BootstrapVue } from "bootstrap-vue";

import VueGauge from "vue-gauge";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Space from "./components/Space.vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(BootstrapVue);

Vue.component("Rocket", Rocket);
Vue.component("vue-gauge", VueGauge);

export let mountParcel;

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
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

export const name = "spacexplorer";
export const bootstrap = [
  (props) => {
    mountParcel = props.mountParcel;
    return Promise.resolve();
  },
];
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
