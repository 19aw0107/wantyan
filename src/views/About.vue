<template>
  <div class="home">
    <div class="loading">
      <div class="textbox">
        <h2>あそびかた</h2>
        <img src="@/assets/rule.png" class="rule_img">
        <p>
          わんちゃんが<ruby>食<rt>た</rt></ruby>べてもいいと<ruby>思<rt>おも</rt></ruby>う<ruby>食<rt>た</rt></ruby>べ<ruby>物<rt>もの</rt></ruby>をえらんで<br>
          たくさん<ruby>食<rt>た</rt></ruby>べさせてあげよう！！
        </p>
      </div>
      <img src="@/assets/siroinu.png" class="loading_img">
      <p class="loading_p">Loading</p>
      <div class="loading_area">
        <div class="loading_1"></div>
        <div class="loading_2"></div>
        <div class="loading_3"></div>
      </div>
    </div>
    <router-link to="/game">
      <div class="letgo">
        <p>ゲームをはじめる</p>
      </div>
    </router-link>
    <div class="game">
      <img src="@/assets/game09.png" class="game_map y6">
      <img src="@/assets/game01.png" class="game_map y3">
      <img src="@/assets/game02.png" class="game_map y5">
      <img src="@/assets/game03.png" class="game_map y1">
      <img src="@/assets/game04.png" class="game_map y4">
      <img src="@/assets/game05.png" class="game_map y2">
    </div>
  </div>
</template>

<style scoped>
.loading{
  width: 667px;
  height: 375px;
  background: #FEA200;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
  animation-name: animation-loading;    /*ローディング*/
  animation-fill-mode: forwards;        /*終了後、継続*/
  animation-delay: 10s;                  /*0秒スタート*/
  animation-duration: 0.8s;               /*3秒間*/
  animation-iteration-count: 1;         /*1回のみ*/
}
@keyframes animation-loading {
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
    display: none;
    visibility: hidden;
  }
}
.loading_img{
  width: 34px;
  position: fixed;
  right: 170px;
  bottom: 16px;
}
.loading_p{
  display: inline-block;
  font-size: 24px;
  color: #FFFFFF;
  position: fixed;
  right: 75px;
  bottom: 10px;
}
.loading_area{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 36px;
  height: 36px;
  margin: 0 auto;
  position: fixed;
  right: 30px;
  bottom: 0px;
}
.loading_1,.loading_2,.loading_3{
  width: 0;
  height: 0;
  border: 4px solid rgb(255, 255, 255);
  border-radius: 100%;
}
.loading_1{
  animation: loading1 1s infinite;
}
.loading_2{
  animation: loading1 1s infinite 0.15s;
}
.loading_3{
  animation: loading1 1s infinite 0.3s;
}
@keyframes loading1 {
  0% {
    transform:translateY(0);
  }
  25% {
    transform:translateY(0);
  }
  50% {
    transform:translateY(-6px);
  }
  75% {
    transform:translateY(0);
  }
  100% {
    transform:translateY(0);
  }
}
.textbox{
  width: 500px;
  height: 280px;
  border-radius: 16px;
  background: #FFFFFF;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.textbox h2{
  font-size: 20px;
  color: #FEA200;
  margin: 14px 0 0 16px;
}
.textbox p{
  display: inline-block;
  font-size: 16px;
  margin: 0 60px;
  font-weight: bold;
}
.rule_img{
  width: 220px;
  margin: 10px 140px;
}
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
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
.y0{
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
</style>

<script>
// @ is an alias to /src
/*import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}*/
</script>
