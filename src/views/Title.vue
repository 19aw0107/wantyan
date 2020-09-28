<template>
  <div class="home">
    <div class="loading">
      <img src="@/assets/siroinu.png" class="loading_img">
      <p class="loading_p">Loading</p>
      <div class="loading_area">
        <div class="loading_1"></div>
        <div class="loading_2"></div>
        <div class="loading_3"></div>
      </div>
    </div>
    <router-link to="/about">
      <div class="title">
        <img src="@/assets/logo.png" class="logo">
        <img src="@/assets/touchstart.svg" class="start">
      </div>
    </router-link>
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
  z-index: 11;
  animation-name: animation-loading;    /*ローディング*/
  animation-fill-mode: forwards;        /*終了後、継続*/
  animation-delay: 3s;                  /*0秒スタート*/
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
.title{
  width: 667px;
  height: 375px;
  background: url(../assets/titlebg.png);
  position: relative;
  z-index: 10;
}

.logo{
  width: 500px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.start{
  width: 200px;
  position: fixed;
  bottom: 8%;
  left: 38%;
  transform: translate(-50%, -50%);
  animation-name: animation-start;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
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
