<template>
  <div id="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right" @click="goToPlaying">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    goToPlaying () {
      this.$router.push('playing')
    }
  },
}
</script>

<style scoped>
#nav-bar {
  z-index: 10;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.nav-left {
  width: 60px;
}

.nav-center {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.nav-right {
  width: 60px;
}
</style>
