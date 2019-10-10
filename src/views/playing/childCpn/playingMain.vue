<template>
  <div v-if="this.$store.state.musicDetail.length" :class="{ 'imgRotate': this.$store.state.musicPlay }">
    <img :src="this.$store.state.musicDetail[0].al.picUrl" alt="">
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
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
.imgRotate {
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>