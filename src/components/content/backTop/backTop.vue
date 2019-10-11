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
      console.log(document.documentElement.scrollTop)
      if (window.scrolltop > 0) {
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 15);
      }
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
