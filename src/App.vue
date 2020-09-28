<template>
  <div id="app">
    <div class="screen">
        <!--<div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>-->
        <transition mode=”out-in”>
          <router-view/>
        </transition>
    </div>
  </div>
</template>

<style>
*{
  margin: 0px;
  padding: 0px;
  font-family: "Sawarabi Gothic";
}
.screen{
  width: 667px;
  height: 375px;
  position: relative;
}

.v-enter {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}*/
</style>
