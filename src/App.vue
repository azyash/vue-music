<template>
  <div id="app">
    <audio autoplay="autoplay" :src="music" ref="mAudio" />
    <keep-alive exclude="songList">
      <router-view />
    </keep-alive>
    <mainTabBar></mainTabBar>
  </div>
</template>

<script>
import { getMusicDetail, getMusicUrl } from 'network/songList'
import mainTabBar from "components/content/mainTabBar/mainTabBar"

export default {
  components: { mainTabBar },
  computed: {
    music: function () {
      return this.$store.state.music
    }
  },
  methods: {
  },
  watch: {
    '$store.state.musicPlay': function () {
      if (this.$store.state.musicPlay) {
        this.$refs.mAudio.play()
      }
      else {
        this.$refs.mAudio.pause()
      }
    }
  },
  created () {
    this.$store.commit('musicPause')
    if (this.$store.state.musicPlay === false) {
      this.$nextTick(function () {
        getMusicDetail('347230').then(res => {
          this.$store.commit('reviseMusicDetail', res.data.songs)
        })
        getMusicUrl('347230').then(res => {
          this.$store.commit('reviseMusic', res.data.data[0].url)
        })
      })
    }
  },
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
