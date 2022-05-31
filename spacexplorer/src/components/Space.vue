<template>
  <b-button
    size="sm"
    class="my-2 my-sm-0 space-button"
    to="/space"
    @click="deployAstronaut()"
    variant="danger"
  >
    <b>{{ title }}</b>
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
      console.log("Deploying astronaut");
      dispatchEvent(
        new CustomEvent("astronautDeployed", {
          detail: { name: "Cinnabuns " },
        })
      );
    },
  },
};
</script>
