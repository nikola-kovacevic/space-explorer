<template>
  <div id="app">
    <b-navbar id="mainNavbar" type="dark" variant="dark" fixed="top">
      <b-navbar-brand to="/">
        <strong> <Rocket /> SpaceXPlorer </strong>
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-button size="sm" class="my-2 my-sm-0" to="/space" variant="danger">
          <strong>Space view</strong>
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
};
</script>
