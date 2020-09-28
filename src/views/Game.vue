<template>
  <div class="home">
    <div class="game">
      <img src="@/assets/games01.png" class="gametext01">
      <img src="@/assets/games02.png" class="gametext02">
      <div>
        <div class="maru sub" v-bind:class='{active:active03}'></div>
        <div class="batu sub" v-bind:class='{active:active04}'></div>
        <div class="game_item_left" v-on:click="Fuseikai()"><img src="@/assets/select01.png"></div>
        <div class="game_item_right" v-on:click="Seikai()"><img src="@/assets/select10.png"></div>
      </div>
      <img src="@/assets/game09.png" class="game_map y6">
      <img src="@/assets/game01.png" class="game_map y3">
      <img src="@/assets/game02.png" class="game_map y5">
      <img src="@/assets/game03.png" class="game_map y1">
      <img src="@/assets/game04.png" class="game_map y4">
      <img src="@/assets/game05.png" class="game_map y2">
      <img src="@/assets/game07.png" class="game_map y2 sub" v-bind:class='{active:active01}'><!--かなしみ-->
      <img src="@/assets/game08.png" class="game_map y2 sub" v-bind:class='{active:active02}'><!--よろこび-->
      <router-link to="/game01">
        <div class="letgo sub" v-bind:class='{active:active05}'>
          <p>次の問題に行く</p>
        </div>
      </router-link>
      <router-link to="/game01">
        <div class="letgo sub" v-bind:class='{active:active06}'>
          <p>次の問題に行く</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.letgo{
  width: 200px;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  font-weight: bold;
  text-align: center;
  color: #FFFFFF;
  background: #FEA200;
  border: 4px #FFFFFF solid;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: fixed;
  bottom: 26px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 20;
}
.maru{
  display: inline-block;
  width: 160px;
  height: 160px;
  border: 18px solid red;
  border-radius: 160px;
  position: fixed;
  top: 80px;
  right: 74px;
  z-index: 18;
}
.batu{
  display: inline-block;
  width: 200px;
  height: 20px;
  background: blue;
  border-radius: 160px;
  transform: rotate(45deg);
  position: fixed;
  top: 170px;
  left: 74px;
  z-index: 18;
}
.batu::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  transform: rotate(90deg);
}
.game_item_left{
  width: 160px;
  height: 160px;
  position: fixed;
  top: 90px;
  left: 80px;
  z-index: 13;
  animation-name: animation-item1;    /*ローディング*/
  animation-fill-mode: forwards;        /*終了後、継続*/
  animation-delay: 4.2s;                  /*0秒スタート*/
  animation-duration: 0.4s;               /*3秒間*/
  animation-iteration-count: 1;         /*1回のみ*/
  opacity:0;
}
@keyframes animation-item1 {
  0% {
    transform: translateX(-200px);
    opacity:1;
  }
  100% {
    transform: translateX(0px);
    opacity:1;
  }
}
.game_item_right{
  width: 160px;
  height: 160px;
  position: fixed;
  top: 90px;
  right: 100px;
  z-index: 13;
  animation-name: animation-item2;    /*ローディング*/
  animation-fill-mode: forwards;        /*終了後、継続*/
  animation-delay: 4.2s;                  /*0秒スタート*/
  animation-duration: 0.4s;               /*3秒間*/
  animation-iteration-count: 1;         /*1回のみ*/
  opacity:0;
}
@keyframes animation-item2 {
  0% {
    transform: translateX(200px);
    opacity:1;
  }
  100% {
    transform: translateX(0px);
    opacity:1;
  }
}
#timer{
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
}
.gametext01{
  display: inline-block;
  width: 130px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  animation-name: animation-gamestart1;    /*ローディング*/
  animation-fill-mode: forwards;        /*終了後、継続*/
  animation-delay: 1s;                  /*0秒スタート*/
  animation-duration: 2s;               /*3秒間*/
  animation-iteration-count: 1;         /*1回のみ*/
  opacity:0;
}
@keyframes animation-gamestart1 {
  0% {
    opacity:1;
  }
  90% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
    visibility: hidden;
  }
}
.gametext02{
  display: inline-block;
  width: 210px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 12;
  animation-name: animation-gamestart2;    /*ローディング*/
  animation-fill-mode: forwards;        /*終了後、継続*/
  animation-delay: 3s;                  /*0秒スタート*/
  animation-duration: 1s;               /*3秒間*/
  animation-iteration-count: 1;         /*1回のみ*/
  opacity:0;
}
@keyframes animation-gamestart2 {
  0% {
    opacity:1;
  }
  90% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
    visibility: hidden;
  }
}
.game{
  width: 667px;
  height: 375px;
  position: relative;
  z-index: 10;
}
.game_map{
  width: 667px;
  height: 375px;
  position: fixed;
  top: 0;
  left: 0;
}
.y6{
  z-index: 6;
}
.y1{
  z-index: 5;
}
.y2{
  z-index: 4;
}
.y3{
  z-index: 3;
}
.y4{
  z-index: 2;
}
.y5{
  z-index: 1;
}
@keyframes animation-start {
  0% {
      transform: scale(1, 1);
  }
  50% {
      transform: scale(1.05, 1.05);
  }
  100% {
      transform: scale(1, 1);
  }
}
.sub{
  display: none;
}
.active{
  display: inline-block;
}
</style>

<script>
export default {
  data() {
    return {
      active01: false,
      active02: false,
      active03: false,
      active04: false,
      active05: false,
      active06: false,
    }
  },
  methods: {
    Seikai() {
      this.active02 =! this.active02;
      this.active03 =! this.active03;
      this.active05 =! this.active05;
      this.$store.commit('increment'); //ストアに正解数をプラスする。
      console.log(this.$store.state.count)
    },
    Fuseikai() {
      this.active01 =! this.active01;
      this.active04 =! this.active04;
      this.active06 =! this.active06;
    }
  },
}
</script>
