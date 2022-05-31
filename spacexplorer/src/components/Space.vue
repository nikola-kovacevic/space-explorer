<template>
  <b-button
    size="sm"
    class="my-2 my-sm-0 space-button"
    to="/space"
    @click="deployAstronaut()"
    variant="danger"
  >
    <b>Deploy astronaut</b>
  </b-button>
</template>
<script>
export default {
  methods: {
    deployAstronaut() {
      console.log("Deployed astronaut from spacexplorer microfrontend");
      dispatchEvent(
        new CustomEvent("astronautDeployed", {
          detail: { name: "Astronaut" },
        })
      );
    },
  },
};
</script>
