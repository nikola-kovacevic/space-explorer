<template>
  <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <vue-gauge :refid="'type-unique-id'" :options="gaugeOptions"></vue-gauge>
    <h3 class="card-title central">{{ central }}</h3>
  </div>
</template>

<script>
export default {
  name: "gauge",

  data() {
    return {
      gaugeOptions: {
        outerNeedle: true,
        needleColor: "white",
        needleValue: 85,
        arcDelimiters: [40, 60],
        arcColors: ["rgb(255,84,84)", "rgb(239,214,19)", "rgb(61,204,91)"],
        rangeLabel: [],
      },
      title: "Pressure (psi)",
      central: 5.3,
    };
  },
};
</script>
