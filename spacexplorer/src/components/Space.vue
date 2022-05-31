<template>
  <b-button
    size="sm"
    class="my-2 my-sm-0 space-button"
    to="/space"
    @click="deployAstronaut()"
    variant="danger"
  >
    <strong>{{ title }}</strong>
  </b-button>
</template>
<script>
export default {
  data() {
    return {
      title: "Deploy astronaut",
    };
  },
  methods: {
    deployAstronaut() {
      console.log("[Application SpaceXPlorer]", "Deploying astronaut");
      dispatchEvent(
        new CustomEvent("astronautDeployed", {
          detail: { name: "Cinnabuns " },
        })
      );
    },
  },
};
</script>
