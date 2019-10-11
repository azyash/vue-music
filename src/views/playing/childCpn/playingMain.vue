<template>
  <div v-if="this.$store.state.musicDetail.length">
    <!-- :class="{ 'imgRotate': this.$store.state.musicPlay }" -->
    <img ref="rotateImg" :src="this.$store.state.musicDetail[0].al.picUrl" alt="">
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data () {
    return {
      rotateDeg: 0,
      rotateImgRotate: null
    }
  },
  watch: {
    '$store.state.musicPlay': function () {
      if (this.$store.state.musicPlay) {
        this.rotateImg()
      }
      else {
        clearTimeout(this.rotateImgRotate)
      }
    }
  },
  computed: {},
  methods: {
    rotateImg () {
      this.rotateImgRotate = setInterval(() => {
        this.$refs.rotateImg.style.transform = 'rotate(' + (this.rotateDeg += 0.15) + 'deg)'
        this.$refs.rotateImg.style.transition = 'all 15 linear'
      }, 15)
    }
  },
  created () {
  },
  mounted () { }
}
</script>

<style scoped>
img {
  width: 100%;
}
div {
  width: 70%;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 50%;
}
/* .imgRotate {
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
} */
</style>