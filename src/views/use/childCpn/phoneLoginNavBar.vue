<template>
  <navBar class="navBar">
    <div slot="left" class="el-icon-arrow-left" @click="back"></div>
    <div class="title" slot="center">
      手机号登录
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
    back () {
      this.$emit('activePhoneLogin')
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
.title {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
}
.navBar div:nth-child(1) {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}
.navBar div:nth-child(2) {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
}
</style>