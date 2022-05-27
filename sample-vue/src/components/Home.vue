<template>
  <div class="py-3 px-5">
    <b-row>
      <b-col class="dashboard-item" sm="8">
        <div class="card">
          <Saturn />
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
        <div class="card">
          <Saturn />
        </div>
      </b-col>
      <b-col class="dashboard-item" sm>
        <div class="card">
          <Saturn />
        </div>
      </b-col>
      <b-col class="dashboard-item" sm>
        <div class="card">
          <Saturn />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
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
    };
  },
};
</script>
<style lang="scss">
div.py-3 {
  div.row {
    div.dashboard-item {
      min-height: 400px;
      padding: 20px;

      .card {
        border: 1px solid #111826;
        border-radius: 25px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow: hidden;
        min-height: 100%;
        // background: #040c24;
        background-image: linear-gradient(
          99.9deg,
          rgba(3, 9, 23, 1) 21.2%,
          rgba(8, 21, 37, 1) 84.8%
        );

        display: flex;
        align-items: center;
        justify-content: center;

        .card-title {
          color: #eee;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }
    .central {
      position: absolute;
      top: 55%;
    }
  }
}
</style>
