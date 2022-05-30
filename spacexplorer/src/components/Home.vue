<template>
  <div class="py-3 px-5">
    <b-row>
      <b-col class="dashboard-item" sm="8">
        <div class="card">
          <div id="parcel-saturn"></div>
        </div>
      </b-col>
      <b-col class="dashboard-item" sm="4">
        <div class="card">
          <h3 class="card-title">Pressure (psi)</h3>
          <vue-gauge
            :refid="'type-unique-id'"
            :options="gaugeOptions"
          ></vue-gauge>
          <h3 class="card-title central">5.3</h3>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="dashboard-item" sm>
        <div id="parcel-crew-manifest" class="card p-4"></div>
      </b-col>
      <b-col class="dashboard-item" sm>
        <div class="card">
          <b-button class="big-red-button" @click="buttonPressed()">
            Push me
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mountParcel } from "../main.js";

export default {
  name: "home",
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
      first: null,
      second: null,
    };
  },
  mounted() {
    this.loadParcel();
  },
  methods: {
    loadParcel() {
      /*global System*/
      this.first = mountParcel(() => System.import("parcel-crew-manifest"), {
        domElement: document.getElementById("parcel-crew-manifest"),
      });
      /*global System*/
      this.second = mountParcel(() => System.import("parcel-saturn"), {
        domElement: document.getElementById("parcel-saturn"),
      });
    },
    async buttonPressed() {
      console.log("Main to Saturn", this.second.getStatus());
      if (this.second.getStatus() === "MOUNTED") {
        await this.second.update("1");
      }

      console.log("Main to Crew Manifest", this.first.getStatus());
      if (this.second.getStatus() === "MOUNTED") {
        await this.first.update("2");
      }
    },
  },
};
</script>
