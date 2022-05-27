import Vue from "vue";
import Router from "vue-router";

import singleSpaVue from "single-spa-vue";
import { Rocket } from "vue-icon-packs/oc";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import VueGauge from "vue-gauge";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Space from "./components/Space.vue";
import ParcelPage from "./components/ParcelPage.vue";
// Reusable
import Saturn from "./components/reusable/Saturn.vue";

import "../assets/styles/style.scss";

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.component("Rocket", Rocket);
Vue.component("Saturn", Saturn);

Vue.component("vue-gauge", VueGauge);

export var mountParcel;

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
    return Promise.resolve();
  },
];
export const mount = [singleSpa.mount];
export const unmount = [singleSpa.unmount];
