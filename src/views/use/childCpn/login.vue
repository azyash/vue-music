<template>
  <div class="login">
    <div class="el-icon-close" @click="activeLogin"></div>
    <img src="~assets/image/use/13.png" alt="">
    <div class="button" @click="activePhoneLogin">手机号登录</div>
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
  methods: {
    activeLogin () {
      this.$emit('activeLogin')
    },
    activePhoneLogin () {
      this.$emit('activePhoneLogin')
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
.login {
  background: red;
  width: 100%;
  height: 100%;
}
img {
  position: absolute;
  top: 20vh;
  left: 50vw;
  transform: translateX(-50%);
  width: 20vw;
  height: 20vw;
}
.button {
  color: red;
  font-weight: 600;
  font-size: 5vw;
  text-align: center;
  line-height: 8vh;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15vh;
  background: white;
  width: 80vw;
  height: 8vh;
  border-radius: 4vh;
}
.el-icon-close {
  color: #eee;
  position: relative;
  font-size: 8vw;
  top: 10px;
  left: 10px;
}
</style>