<template>
  <div class="space-container">
    <div class="star"></div>
    <div v-for="meteor in meteors" :key="meteor" :class="meteor"></div>

    <img
      class="astronaut"
      v-bind:class="{ deployed: isDeployed }"
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
  name: "about",
  data() {
    return {
      meteors: new Array(20).fill("meteor").map((el, i) => `${el}-${i + 1}`),
      astronaut: "astronaut",
      isDeployed: false,
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
      addEventListener("astronautDeployed", (event) => {
        console.log("Caught event within space microfrontend", event);
        this.isDeployed = true;
      });
    },
  },
};
</script>
