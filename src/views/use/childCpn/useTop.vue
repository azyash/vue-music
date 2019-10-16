<template>
  <div>
    <div v-if="this.$store.state.userStatus.length == 0" class="vIf">
      <p>登录网易云音乐</p>
      <p>手机电脑多端同步，尽享海量高品质音乐</p>
      <div class="login" @click="showLogin">
        立即登录
      </div>
    </div>
    <div v-else class="vElse">
      <div>
        <img :src="this.$store.state.userStatus.profile.avatarUrl" alt="">
        <p>{{this.$store.state.userStatus.profile.nickname}}</p>
      </div>
      <div>
        <ul>
          <li>
            <span>{{this.$store.state.userDetail.level}}</span>
            <span>Lv</span>
          </li>
          <li>
            <span>{{this.$store.state.userDetail.listenSongs}}</span>
            <span>听歌量</span>
          </li>
          <li>
            <span>{{this.$store.state.userDetail.profile.newFollows}}</span>
            <span>关注</span>
          </li>
          <li>
            <span>{{this.$store.state.userDetail.profile.followeds}}</span>
            <span>粉丝</span>
          </li>
        </ul>
      </div>
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
.vIf p {
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
.vElse {
  display: flex;
  justify-content: center;
}
.vElse div:nth-child(2) {
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.vElse img {
  margin: 0 6vw;
  width: 14vw;
  height: 14vw;
  border-radius: 7vw;
}
.vElse p {
  text-align: center;
  margin: 1vw 3vw;
  width: 20vw;
  overflow: hidden;
  text-overflow: ellipsis;
}
.vElse ul {
  display: flex;
  width: 80%;
  justify-content: space-between;
}
.vElse ul li {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>