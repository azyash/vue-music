<template>
  <div>
    <login class="login" v-if="showLogin" @activeLogin="activeLogin"></login>
    <useNavBar></useNavBar>
    <scroll class="scroll">
      <useTop @activeLogin="activeLogin"></useTop>
      <useBanner></useBanner>
      <useList></useList>
    </scroll>
  </div>
</template>

<script>
import scroll from 'common/scroll/scroll'
import login from './childCpn/login'
import useNavBar from './childCpn/useNavBar'
import useBanner from './childCpn/useBanner'
import useTop from './childCpn/useTop'
import useList from './childCpn/useList'

export default {
  name: "",
  components: {
    scroll,
    login,
    useNavBar,
    useBanner,
    useTop,
    useList
  },
  props: {},
  data () {
    return {
      showLogin: false
    }
  },
  watch: {},
  computed: {},
  methods: {
    activeLogin () {
      this.showLogin = !this.showLogin
      console.log('qqq')
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
.scroll {
  padding: 0 10px;
  overflow: hidden;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 50px;
}
.login {
  position: absolute;
  z-index: 99;
}
</style>