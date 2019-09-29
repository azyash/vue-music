<template>
  <navBar class="navBar">
    <div slot="left" class="el-icon-arrow-left" @click="backHome"></div>
    <div slot="center" class="center">歌单</div>
    <div slot="right">
      <img src="~assets/image/common/musicicon-white.svg" alt="">
    </div>
  </navBar>
</template>

<script>
import navBar from 'common/navBar/navBar'

export default {
  name: "",
  components: { navBar },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    backHome () {
      this.$router.replace('/home')
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
div {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: white;
}
img {
  width: 18px;
}
</style>