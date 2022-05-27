<template>
  <div id="app">
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
          type="dark"
          variant="dark"
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

<style lang="scss">
body {
  background: #a1a2a6 !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #003153;
}

.default-theme .list-group-item .sidebar-menu-item,
.vue-bootstrap-sidebar {
  background: #030917 !important;
  color: white !important;
  font-weight: bold;
}

.default-theme .bar1,
.default-theme .bar2,
.default-theme .bar3 {
  background-color: white !important;
}

.vue-bootstrap-sidebar {
  .sidebar-header {
    height: 56px;
  }

  .items-wrapper,
  .default-theme .list-group-item .sidebar-menu-item,
  .sidebar-header {
    background: #030917 !important;
  }

  .list-group-item a.sidebar-menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
<style lang="scss">
@import "node_modules/vue-bootstrap-sidebar/src/scss/default-theme";
</style>
