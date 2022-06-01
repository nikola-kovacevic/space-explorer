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
import { log } from "../services/log";

export default {
  data() {
    return {
      title: "Deploy astronaut",
    };
  },
  methods: {
    deployAstronaut() {
      log("Deploying astronaut");

      const deployAstronautEvent = new CustomEvent("astronautDeployed", {
        detail: { name: "Cinnabuns", surname: "Pieplow" },
      });

      return dispatchEvent(deployAstronautEvent);
    },
  },
};
</script>
