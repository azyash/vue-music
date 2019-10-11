<template>
  <div class="back-top" @click="topClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data () {
    return {

    }
  },
  methods: {
    topClick: function () {
      window.scrollTo(0, 0);
    }
  }
}
</script>

<style scoped>
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
