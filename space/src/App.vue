<template>
  <div class="space-container">
    <div class="star"></div>
    <div v-for="meteor in meteors" :key="meteor" :class="meteor"></div>

    <img
      class="astronaut"
      v-bind:class="{ deployed: deployedAstronautName }"
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
export default {
  name: "space",
  data() {
    return {
      meteors: new Array(20).fill("meteor").map((el, i) => `${el}-${i + 1}`),
      astronaut: "astronaut",
      deployedAstronautName: "",
    };
  },
  mounted() {
    this.listen();
  },
  methods: {
    getPic: (name) => `./../../public/images/${name}.png`,
    listen() {
      this.listener = addEventListener("astronautDeployed", (event) => {
        if (this.deployedAstronautName) {
          return console.log(`${this.deployedAstronautName} already deployed`);
        }
        this.deployedAstronautName = event.detail.name;
        console.log("Deploying astronaut", this.deployedAstronautName);
      });
    },
  },
};
</script>
