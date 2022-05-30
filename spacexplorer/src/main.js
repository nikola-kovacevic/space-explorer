import Vue from "vue";
import Router from "vue-router";

import singleSpaVue from "single-spa-vue";
import { Rocket } from "vue-icon-packs/oc";
import { BootstrapVue } from "bootstrap-vue";

import VueGauge from "vue-gauge";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Space from "./components/Space.vue";
import ParcelPage from "./components/ParcelPage.vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(BootstrapVue);

Vue.component("Rocket", Rocket);

Vue.component("vue-gauge", VueGauge);

export let mountParcel;
export let updateParcel;

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
    {
      path: "/parcel_page",
      name: "parcelPage",
      component: ParcelPage,
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

export const bootstrap = [
  (props) => {
    mountParcel = props.mountParcel;
    updateParcel = props.updateParcel;
    return Promise.resolve();
  },
];
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
export const update = singleSpa.update;
