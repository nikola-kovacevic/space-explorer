<template>
  <div class="space-container">
    <div class="star"></div>
    <div v-for="meteor in meteors" :key="meteor" :class="meteor"></div>

    <img class="astronaut" :src="getPic(astronaut)" alt="astronaut" />

    <div class="rocket">
      <div class="rocket-body">
        <div class="body"></div>
        <div class="fin fin-left"></div>
        <div class="fin fin-right"></div>
        <div class="window"></div>
      </div>
      <div class="exhaust-flame"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      meteors: new Array(20).fill("meteor").map((el, i) => `${el}-${i + 1}`),
      astronaut: "astronaut",
    };
  },
  methods: {
    getPic(name) {
      return `./../../public/images/${name}.png`;
    },
  },
};
</script>
<style lang="scss" scoped>
/* Meteor */
$n: 15;
$s: 300;

html,
body {
  height: 100%;
  overflow: hidden;
  background-image: radial-gradient(ellipse at top, #080e21 0%, #1b2735 95%);
}

$shadow: ();

@for $i from 1 through $s {
  $x: random(1920);
  $y: random(1000);
  $shadow: $shadow, ($x + px $y + px #fff) !global;
}

.star {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: $shadow;
}

@for $i from 1 through $n {
  $v: random(90) + 9; // left
  $h: random(250) + 50; // top
  $d: random(70) / 10 + 3;
  .meteor-#{$i} {
    position: absolute;
    top: $h + px;
    left: $v * 1%;
    width: 300px;
    height: 1px;
    transform: rotate(-45deg);
    background-image: linear-gradient(to right, #fff, rgba(255, 255, 255, 0));
    animation: meteor $d + s linear infinite;
    &:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 5px;
      border-radius: 50%;
      margin-top: -2px;
      background: rgba(#fff, 0.7);
      box-shadow: 0 0 15px 3px #fff;
    }
  }
}

@keyframes meteor {
  0% {
    opacity: 1;
    margin-top: -300px;
    margin-right: -300px;
  }
  12% {
    opacity: 0;
  }
  15% {
    margin-top: 300px;
    margin-left: -600px;
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}
/* Astronaut */

.astronaut {
  width: 100px;
  height: auto;
  z-index: 10000;
  position: absolute;
  top: 50%;
  left: 50%;
}
/* Rocket */

$white: #f5f5f5;
$lightgrey: #dadada;
$midgrey: #b4b2b2;
$darkgrey: #554842;
$red: #f01a19;
$darkred: #f01a19;

.container-fluid {
  overflow: hidden;
}

.space-container {
  position: relative;
  min-height: calc(100vh - 90px);
  background-color: #000;
  overflow: hidden;
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.5);
  }
}

.rocket {
  position: absolute;
  top: 40%;
  width: 80px;
  left: calc(50% - 60px);
  .rocket-body {
    width: 80px;
    z-index: 10;
    left: calc(50% - 50px);
    animation: bounce 0.5s infinite;
    .body {
      background-color: $lightgrey;
      height: 180px;
      left: calc(50% - 50px);
      border-top-right-radius: 100%;
      border-top-left-radius: 100%;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-top: 5px solid $white;
    }
    &:before {
      content: "";
      position: absolute;
      left: calc(50% - 24px);
      width: 48px;
      height: 13px;
      background-color: $darkgrey;
      bottom: -13px;
      border-bottom-right-radius: 60%;
      border-bottom-left-radius: 60%;
    }
  }
  .window {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: $darkred;
    left: calc(50% - 25px);
    top: 40px;
    border: 5px solid $midgrey;
  }
  .fin {
    position: absolute;
    z-index: -100;
    height: 55px;
    width: 50px;
    background-color: $darkred;
  }
  .fin-left {
    left: -30px;
    top: calc(100% - 55px);
    border-top-left-radius: 80%;
    border-bottom-left-radius: 20%;
  }
  .fin-right {
    right: -30px;
    top: calc(100% - 55px);
    border-top-right-radius: 80%;
    border-bottom-right-radius: 20%;
  }
  .exhaust-flame {
    position: absolute;
    width: 28px;
    background: linear-gradient(to top, transparent 10%, #dc3545 60%);
    height: 150px;
    left: calc(50% - 14px);
    z-index: 2;
    animation: exhaust 0.3s infinite;
    top: 110%;
    border-radius: 15px;
  }
}

@keyframes bounce {
  0% {
    transform: translate3d(0px, 0px, 0);
  }
  50% {
    transform: translate3d(0px, -4px, 0);
  }
  100% {
    transform: translate3d(0px, 0px, 0);
  }
}

@keyframes exhaust {
  0% {
    background: linear-gradient(to top, transparent 10%, #0dcaf0 60%);
  }
  50% {
    background: linear-gradient(to top, transparent 8%, #ffc107 60%);
  }
  75% {
    background: linear-gradient(to top, transparent 12%, #dc3545 60%);
  }
}
</style>
