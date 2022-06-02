<template>
  <div class="space-container">
    <div class="star"></div>
    <div v-for="meteor in meteors" :key="meteor" :class="meteor"></div>

    <img
      class="astronaut"
      v-bind:class="{ deployed }"
      :src="getPic(astronaut)"
      alt="astronaut"
    />

    <div class="rocket">
      <div class="rocket-body">
        <div class="body"></div>
        <div class="fin fin-left"></div>
        <div class="fin fin-right"></div>
        <div class="window"></div>
      </div>
      <div class="exhaust-flame"></div>
    </div>
  </div>
</template>

<script>
import { log } from "./services/log";

export default {
  name: "space",
  data() {
    return {
      meteors: new Array(50).fill("").map((_, i) => `meteor-${i + 1}`),
      astronaut: "astronaut",
      deployed: false,
    };
  },

  mounted() {
    this.listen();
  },

  methods: {
    getPic(name) {
      return `./../../public/images/${name}.png`;
    },

    listen() {
      addEventListener("astronautDeployed", ({ detail }) =>
        this.deployed
          ? log(`Astronaut is already deployed`)
          : this.deployAstronaut(`${detail.name} ${detail.surname}`)
      );
    },

    deployAstronaut(name) {
      this.deployed = !!name;
      return log(`Deploying astronaut ${name}`);
    },
  },
};
</script>
