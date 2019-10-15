<template>
  <div>
    <p>登录网易云音乐</p>
    <p>手机电脑多端同步，尽享海量高品质音乐</p>
    <div class="login" @click="showLogin">
      立即登录
    </div>
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
    showLogin () {
      this.$emit('activeLogin')
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
p {
  text-align: center;
  padding: 3px 0;
  font-weight: 600;
}
.login {
  cursor: pointer;
  line-height: 22px;
  height: 22px;
  font-size: 18px;
  text-align: center;
  padding: 3px 0;
  font-weight: 600;
  border: 1px solid;
  border-radius: 22px;
}
</style>