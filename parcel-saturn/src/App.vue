<template>
  <div class="space">
    <div class="destination-title">
      <div class="destination">
        <h3 class="card-title">{{ title }}</h3>
        <Countdown
          :end="date"
          showDays
          showHours
          showMinutes
          showSeconds
        ></Countdown>
      </div>
    </div>
    <div id="saturn">
      <div class="planet bottom planet-bg"></div>
      <div class="rings"></div>
      <div class="planet top planet-bg"></div>
    </div>
  </div>
</template>

<script>
import Countdown from "countdown-vue";

export default {
  components: { Countdown },
  data() {
    return {
      title: "Destination in",
      date: "August 22, 2023",
    };
  },
};
</script>
