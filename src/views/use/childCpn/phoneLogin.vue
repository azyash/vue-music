<template>
  <div class="father">
    <phoneLoginNavBar @activePhoneLogin="activePhoneLogin"></phoneLoginNavBar>
    <input type="text" placeholder="请输入手机号" pattern="\d*" v-model.lazy="phone">
    <input type="password" placeholder="请输入密码" v-model.lazy="password">
    <div class="login" @click="login">立即登录</div>
  </div>
</template>

<script>
import { getLogin, getLoginRefresh, getLoginStatus, getUseDetail, getUseSubcount } from 'network/use'
import phoneLoginNavBar from './phoneLoginNavBar'

export default {
  name: "",
  components: {
    phoneLoginNavBar
  },
  props: {},
  data () {
    return {
      phone: '',
      password: '',
      userDetail: {}
    }
  },
  watch: {
  },
  computed: {},
  methods: {
    async login () {
      await getLogin(this.phone, this.password)
      await getLoginStatus().then(res => {
        this.$store.state.userStatus = res.data
        this.$store.state.userId = res.data.profile.userId
      })
      getUseDetail(this.$store.state.userId).then(res => {
        this.userDetail = res.data
        this.$emit('userDetail', this.userDetail)
        this.$emit('activePhoneLogin')
        this.$emit('activeLogin')
      })
    },
    activePhoneLogin () {
      this.$emit('activePhoneLogin')
    }
  },
  created () {
    // getLoginRefresh()
  },
  mounted () { },
  updated () { }
}
</script>

<style scoped>
.father {
  overflow: hidden;
  background: white;
  width: 100%;
  height: 100%;
}
input {
  padding: 4px;
  margin: 10px;
  width: 100%;
  display: block;
  border-bottom: 1px solid #eee;
}
.login {
  text-align: center;
  margin: 0 auto;
  color: white;
  font-size: 4vw;
  font-weight: 500;
  line-height: 5vh;
  left: 50%;
  bottom: 15vh;
  background: red;
  width: 80vw;
  height: 5vh;
  border-radius: 2.5vh;
}
</style>D