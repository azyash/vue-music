<template>
  <div id="nav-bar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
  },
}
</script>

<style scoped>
#nav-bar {
  font-weight: 600;
  font-size: 18px;
  z-index: 10;
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.nav-left,
.nav-right {
  width: 30px;
}

.nav-center {
  display: flex;
  align-items: center;
  flex: 1;
}
</style>
