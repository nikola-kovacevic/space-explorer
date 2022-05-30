<template>
  <div class="crew">
    <h3 class="card-title">Crew Manifest</h3>
    <b-list-group class="bg-transparent">
      <b-list-group-item
        v-for="astronaut in astronauts"
        :key="astronaut.name"
        class="d-flex align-items-center"
      >
        <b-avatar :src="astronaut.avatar" class="mr-3"></b-avatar>
        <span class="ml-1 mr-auto">{{ astronaut.name }}</span>
        <b-badge class="info" variant="light"
          >{{ astronaut.count }} hours</b-badge
        >
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      astronauts: [
        {
          name: "Cinnabuns Pieplow",
          avatar: "https://cdn-icons-png.flaticon.com/512/547/547413.png",
          count: 27,
        },
        {
          name: "Buttermilk Cocktoasten",
          avatar: "https://cdn-icons-png.flaticon.com/512/547/547413.png",
          count: 13,
        },
        {
          name: "Huckleberry Pennywhistle",
          avatar: "https://cdn-icons-png.flaticon.com/512/547/547413.png",
          count: 3,
        },
        {
          name: "Foncy Porkins",
          avatar: "https://cdn-icons-png.flaticon.com/512/547/547413.png",
          count: 32,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  .crew {
    width: 100%;
  }
  .list-group {
    width: 100%;

    .list-group-item {
      color: white;
      background: transparent;
      justify-content: space-between;
    }

    .info {
      color: #fff;
      background-color: #17a2b8;
    }
  }
}
</style>
