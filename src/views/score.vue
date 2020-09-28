<template>
  <div class="loading">
    <div class="textbox">
      <h2>スコア</h2>
      <p>
        せいかい：4回<br>
      </p>
    </div>
    <router-link to="/">
      <div class="letgo">
        <p>タイトルにもどる</p>
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
  z-index: 12;
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
  font-size: 40px;
  line-height: 50px;
  color: #FEA200;
  text-align: center;
  margin: 20px 0;
}
.textbox p{
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
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
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 20;
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
