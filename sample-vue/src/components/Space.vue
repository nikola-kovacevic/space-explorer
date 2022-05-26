<template>
  <div class="space-container">
    <div class="space"></div>

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
};
</script>
<style lang="scss" scoped>
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
  min-height: 100vh;
  background-color: #000;
  overflow: hidden;
}

.space {
  position: fixed;
  top: 50%;
  left: 50%;
  height: 1px;
  width: 1px;
  background-color: #fff;
  border-radius: 50%;
  box-shadow: -46vw 35vh 0px 0px #fff, -1vw 36vh 1px 1px #fff,
    -5vw -50vh 0px 1px #fff, -19vw -24vh 2px 3px #fff, -21vw 45vh 3px 0px #fff,
    -15vw -25vh 2px 0px #fff, 21vw -14vh 0px 1px #fff, 41vw 34vh 0px 3px #fff,
    16vw -25vh 2px 2px #fff, -41vw -14vh 0px 2px #fff, 6vw 29vh 1px 0px #fff,
    11vw 25vh 3px 2px #fff, 24vw 32vh 2px 0px #fff, -30vw -41vh 2px 2px #fff,
    3vw -40vh 3px 0px #fff, 49vw -34vh 2px 2px #fff, 4vw -48vh 3px 1px #fff,
    -20vw -50vh 0px 0px #fff, 12vw -37vh 0px 0px #fff, -1vw 33vh 1px 3px #fff,
    18vw 5vh 2px 3px #fff, 6vw 31vh 3px 2px #fff, -12vw 48vh 1px 3px #fff,
    -42vw -20vh 0px 0px #fff, -27vw -27vh 1px 0px #fff, -46vw -10vh 0px 3px #fff,
    2vw -17vh 3px 1px #fff, 46vw -24vh 1px 1px #fff, 40vw 1vh 3px 2px #fff,
    12vw 9vh 0px 2px #fff, -27vw -48vh 0px 0px #fff, -18vw 21vh 1px 2px #fff,
    46vw -28vh 0px 0px #fff, -4vw -6vh 0px 2px #fff, 19vw -49vh 0px 3px #fff,
    -8vw 23vh 3px 1px #fff, 12vw 10vh 3px 2px #fff, 4vw 39vh 1px 0px #fff,
    -28vw 18vh 1px 1px #fff, 49vw 37vh 2px 0px #fff, -41vw -15vh 2px 2px #fff,
    -45vw -47vh 0px 2px #fff, 6vw -39vh 1px 3px #fff, -5vw 27vh 2px 1px #fff,
    21vw 8vh 2px 3px #fff, -17vw -8vh 2px 3px #fff, -33vw 37vh 3px 1px #fff,
    -48vw -50vh 2px 0px #fff, 27vw 6vh 1px 0px #fff, -11vw 46vh 0px 1px #fff,
    -50vw -28vh 2px 2px #fff, 30vw 8vh 3px 2px #fff, 20vw -14vh 1px 1px #fff,
    -8vw 5vh 1px 0px #fff, 3vw 37vh 3px 1px #fff, 20vw -27vh 2px 2px #fff,
    4vw -4vh 1px 0px #fff, 49vw 34vh 3px 0px #fff, -48vw 27vh 3px 3px #fff,
    25vw 14vh 3px 2px #fff, 5vw 10vh 2px 2px #fff, 21vw -34vh 1px 2px #fff,
    46vw -2vh 3px 0px #fff, -41vw 1vh 0px 1px #fff, 38vw -4vh 1px 2px #fff,
    -4vw 2vh 0px 0px #fff, -10vw 12vh 2px 0px #fff, -45vw 21vh 0px 1px #fff,
    6vw 26vh 2px 3px #fff, -30vw 24vh 2px 3px #fff, 23vw 8vh 3px 2px #fff,
    -43vw -8vh 1px 3px #fff, 39vw -9vh 0px 1px #fff, -50vw 31vh 0px 2px #fff,
    2vw 16vh 3px 0px #fff, 11vw -50vh 0px 1px #fff, 16vw -15vh 1px 2px #fff,
    -12vw 30vh 2px 2px #fff, 41vw -11vh 3px 0px #fff, -3vw 39vh 2px 1px #fff,
    12vw 9vh 1px 1px #fff, 2vw 13vh 2px 1px #fff, 7vw -19vh 1px 3px #fff,
    -20vw 27vh 3px 2px #fff, -19vw -12vh 0px 1px #fff, 1vw -8vh 2px 3px #fff,
    24vw -37vh 1px 0px #fff, -38vw 8vh 1px 0px #fff, 50vw -31vh 0px 3px #fff,
    25vw -33vh 0px 3px #fff, 25vw 31vh 1px 0px #fff, -5vw -11vh 0px 1px #fff,
    44vw 6vh 3px 3px #fff, -50vw 44vh 3px 3px #fff, -43vw 21vh 0px 1px #fff,
    -49vw 2vh 2px 0px #fff, -32vw 33vh 2px 0px #fff, -5vw -43vh 2px 0px #fff,
    23vw 8vh 0px 1px #fff, 33vw -21vh 2px 0px #fff;
  animation: zoom 10s alternate infinite;
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
