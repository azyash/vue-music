<template>
  <navBar class="navBar">
    <div slot="left" class="el-icon-arrow-left" @click="back"></div>
    <div slot="center" class="center">music</div>
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
    back () {
      this.$router.go(-1)
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
.navBar {
  background: black;
}
</style>