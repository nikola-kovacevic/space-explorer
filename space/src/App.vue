<template>
  <router-view class="vue-app"></router-view>
</template>

<script>
export default {
  name: "sample-vue",
  data() {
    return {
      initialShow: true,
      header: "",
      links: [{ name: "Space", href: { name: "space" } }],
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
