<template>
  <div id="app">
    <div id="App">
      <BootstrapSidebar
        :initial-show="initialShow"
        :links="links"
        :header="header"
        :fa="false"
        @sidebarChanged="onSidebarChanged"
      >
        <template v-slot:navbar>
          <b-navbar
            id="mainNavbar"
            toggleable="lg"
            type="light"
            variant="light"
            fixed="top"
          >
            <b-navbar-nav>
              <b-nav-item to="/">
                <b> <Rocket /> SpaceXPlorer </b>
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </template>

        <template v-slot:content>
          <b-container fluid style="margin-top: 56px">
            <router-view class="vue-app"></router-view>
          </b-container>
        </template>
      </BootstrapSidebar>
    </div>
  </div>
</template>

<script>
import BootstrapSidebar from "vue-bootstrap-sidebar";

export default {
  name: "sample-vue",
  components: {
    BootstrapSidebar,
  },
  data() {
    return {
      initialShow: true,
      header: "",
      links: [
        { name: "Dashboard", href: { name: "home" } },
        { name: "Space", href: { name: "space" } },
        { name: "Parcel", href: { name: "parcelPage" } },
      ],
    };
  },
  methods: {
    onSidebarChanged() {},
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.vue-bootstrap-sidebar .list-group-item a.sidebar-menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
<!-- <style lang="scss" scoped>
.vue-app {
  border-style: solid;
  border-width: 3px;
  border-color: green;
}
</style> -->
<style lang="scss">
/* @import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss"; */
@import "node_modules/vue-bootstrap-sidebar/src/scss/default-theme";
</style>
