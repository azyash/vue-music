<template>
  <div v-if="this.$store.state.musicDetail.length">
    <div class="bgImg">
      <img :src="this.$store.state.musicDetail[0].al.picUrl" alt="" class="bgImg">
    </div>
    <div class="bg"></div>
    <div class="bg2"></div>
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
.bgImg {
  height: 100%;
  width: 130%;
  position: fixed;
  z-index: -2;
  display: flex;
  justify-content: center;
  opacity: 0.8;
  filter: blur(20px);
}
.bg {
  background: rgb(170, 170, 170);
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: -3;
}
.bg2 {
  background: rgb(0, 0, 0);
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0.1;
  z-index: -1;
}
</style>