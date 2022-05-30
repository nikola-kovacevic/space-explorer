<template>
  <div id="app">
    <b-navbar id="mainNavbar" type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">
        <b> <Rocket /> SpaceXPlorer </b>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" to="/space" variant="danger">
          <b>Space view</b>
        </b-button>
      </b-navbar-nav>
    </b-navbar>

    <b-container fluid style="margin-top: 56px">
      <router-view class="vue-app"></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "spacexplorer",
  data() {
    return {
      initialShow: true,
      header: "",
      links: [
        { name: "Dashboard", href: { name: "home" } },
        { name: "Space", href: { name: "space" } },
      ],
    };
  },
};
</script>
