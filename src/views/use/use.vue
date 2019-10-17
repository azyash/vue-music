<template>
  <div>
    <login class="login" v-if="showLogin" @activeLogin="activeLogin" @activePhoneLogin="activePhoneLogin"></login>
    <phoneLogin class="phoneLogin" v-if="showPhoneLogin" @activeLogin="activeLogin" @activePhoneLogin="activePhoneLogin" @userDetail="layUserDetail"></phoneLogin>
    <useNavBar></useNavBar>
    <scroll class="scroll">
      <useTop @activeLogin="activeLogin" :userDetail="userDetail"></useTop>
      <useBanner></useBanner>
      <useList></useList>
    </scroll>
  </div>
</template>

<script>
import { getLogin } from 'network/use.js'

import scroll from 'common/scroll/scroll'
import login from './childCpn/login'
import phoneLogin from './childCpn/phoneLogin'
import useNavBar from './childCpn/useNavBar'
import useBanner from './childCpn/useBanner'
import useTop from './childCpn/useTop'
import useList from './childCpn/useList'

export default {
  name: "",
  components: {
    scroll,
    login,
    phoneLogin,
    useNavBar,
    useBanner,
    useTop,
    useList,
  },
  props: {},
  data () {
    return {
      showLogin: false,
      showPhoneLogin: false,
      userDetail: {}
    }
  },
  watch: {},
  computed: {},
  methods: {
    layUserDetail (userDetail) {
      this.userDetail = userDetail
    },
    activeLogin () {
      this.showLogin = !this.showLogin
    },
    activePhoneLogin () {
      this.showPhoneLogin = !this.showPhoneLogin
    }
  },
  created () {
  },
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
  z-index: 3;
}
.phoneLogin {
  position: absolute;
  z-index: 4;
}
</style>