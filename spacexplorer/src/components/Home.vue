<template>
  <div class="py-3 px-5">
    <b-row>
      <b-col class="dashboard-item" sm="8">
        <div class="card">
          <div id="parcel-saturn"></div>
        </div>
      </b-col>
      <b-col class="dashboard-item" sm="4">
        <Gauge />
      </b-col>
    </b-row>

    <b-row>
      <b-col class="dashboard-item" sm>
        <div id="parcel-crew-manifest" class="card p-4">
          <h2 class="warning" v-if="!crewManifest">
            {{ notMounted }}
          </h2>
        </div>
      </b-col>
      <b-col class="dashboard-item" sm>
        <div class="card">
          <b-button class="big-red-button" @click="buttonPressed()">
            {{ getCrew }}
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mountParcel } from "../main.js";
import Gauge from "./Gauge.vue";

export default {
  /*global System*/
  name: "home",
  data() {
    return {
      crewManifest: null,
      saturn: null,
      notMounted: "Crew manifest is not mounted 😢",
      getCrew: "Get crew",
    };
  },
  mounted() {
    this.loadParcel();
  },
  methods: {
    loadParcel() {
      this.saturn = mountParcel(() => System.import("parcel-saturn"), {
        domElement: document.getElementById("parcel-saturn"),
      });
    },
    buttonPressed() {
      if (!this.crewManifest || this.crewManifest.getStatus() !== "MOUNTED") {
        this.crewManifest = mountParcel(
          () => System.import("parcel-crew-manifest"),
          {
            domElement: document.getElementById("parcel-crew-manifest"),
          }
        );
      }
    },
  },
  components: { Gauge },
};
</script>
