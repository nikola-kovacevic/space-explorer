<template>
  <div class="py-3">
    <h1 class="h1-vue">Main application</h1>
    <div id="parcel"></div>
    <div id="parcel2"></div>
  </div>
</template>

<script>
import { mountParcel } from "../main.js";

export default {
  name: "parcelPage",
  mounted() {
    this.loadParcel();
  },
  methods: {
    loadParcel() {
      var domElement = document.getElementById("parcel");
      /*global System*/
      mountParcel(() => System.import("sample-vue-parcel"), { domElement });

      domElement = document.getElementById("parcel2");
      /*global System*/
      mountParcel(() => System.import("vue-parcel2"), { domElement });
    },
  },
};
</script>

<!-- <style scoped>
input[type="text"],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 25px;
}
</style> -->
