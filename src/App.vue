<template>
  <div id="app">
    <audio autoplay="autoplay" :src="music" />
    <keep-alive exclude="songList">
      <router-view />
    </keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabBar/mainTabBar"

export default {
  components: { mainTabBar },
  computed: {
    music: function () {
      return this.$store.state.music
    }
  }
}
</script>

<style>
@import "assets/css/base.css";
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
