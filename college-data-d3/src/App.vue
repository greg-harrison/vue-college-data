<template>
  <div id="app">
    <header></header>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/layout_components/header";
export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
