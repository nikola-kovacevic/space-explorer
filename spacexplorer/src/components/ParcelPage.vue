<template>
  <div>
    <b-row>
      <b-col>
        <b-button variant="danger" @click="updateData()">Button</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <div id="parcel"></div>
      </b-col>
      <b-col>
        <div id="parcel-saturn"></div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mountParcel } from "../main.js";

export default {
  name: "parcelPage",
  data() {
    return {
      first: "",
      second: "",
    };
  },
  mounted() {
    this.loadParcel();
  },
  methods: {
    loadParcel() {
      /*global System*/
      this.first = mountParcel(() => System.import("sample-vue-parcel"), {
        domElement: document.getElementById("parcel"),
      });

      /*global System*/
      this.second = mountParcel(() => System.import("parcel-saturn"), {
        domElement: document.getElementById("parcel-saturn"),
      });
    },

    updateData() {
      console.log(this.second);
      console.log(this.second.getStatus());

      this.second.update("1");
    },
  },
};
</script>
