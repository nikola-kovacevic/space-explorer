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
        <div class="card p-4" v-if="!crewManifestMounted">
          <h2 class="warning">
            {{ notMounted }}
          </h2>
        </div>
        <div
          id="parcel-crew-manifest"
          class="card p-4"
          :style="crewManifestMounted ? 'display: flex' : 'display: none'"
        ></div>
      </b-col>
      <b-col class="dashboard-item" sm>
        <div class="card">
          <b-button class="big-red-button" @click="buttonPressed()">
            {{ !crewManifestMounted ? getCrew : ejectCrew }}
          </b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mountParcel } from "../main";
import { log } from "../services/log";
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
      ejectCrew: "Eject crew",
      crewManifestMounted: false,
    };
  },

  async mounted() {
    await this.mountParcelSaturn();
  },

  methods: {
    async mountParcelSaturn() {
      log("Mounting Saturn");

      const domElement = document.getElementById("parcel-saturn");
      this.saturn = await mountParcel(() => System.import("parcel-saturn"), {
        domElement,
      });
    },

    async unmountCrewManifest() {
      return this.crewManifest.unmount().then(this.updateCrewManifestState);
    },

    async mountCrewManifest() {
      const domElement = document.getElementById("parcel-crew-manifest");
      this.crewManifest = await mountParcel(
        () => System.import("parcel-crew-manifest"),
        { domElement }
      );

      return this.updateCrewManifestState();
    },

    async buttonPressed() {
      log(
        `${this.crewManifestMounted ? "Mounting" : "Unmounting"} Crew Manifest`
      );

      return this.crewManifestMounted
        ? this.unmountCrewManifest()
        : this.mountCrewManifest();
    },

    async updateCrewManifestState() {
      return Promise.resolve().then(
        () => (this.crewManifestMounted = !this.crewManifestMounted)
      );
    },
  },
  components: { Gauge },
};
</script>
