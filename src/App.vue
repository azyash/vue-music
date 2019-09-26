<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabBar/mainTabBar"

export default {
  components: { mainTabBar }
}
</script>

<style>
@import "assets/css/base.css";
</style>
