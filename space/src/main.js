import Vue from "vue";
import Router from "vue-router";
import singleSpaVue from "single-spa-vue";

import App from "./App.vue";

import "../assets/styles/style.scss";
export let mountParcel;

Vue.config.productionTip = false;

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "space",
      component: App,
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

export const name = "space";
export const bootstrap = [
  (props) => {
    mountParcel = props.mountParcel;
    return Promise.resolve();
  },
];
export const mount = singleSpa.mount;
export const unmount = singleSpa.unmount;
export const update = singleSpa.update;
