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
          <Saturn />
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
};
</script>
<style lang="scss">
div.py-3 {
  div.row {
    div.dashboard-item {
      min-height: 400px;
      padding: 20px;

      .card {
        border: 1px solid black;
        border-radius: 25px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
          0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow: hidden;
      }
    }
  }
}
</style>
