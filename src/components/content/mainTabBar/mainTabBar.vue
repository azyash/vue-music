<template>
  <tabBar class="mainTabBar">
    <tabBarItem link="/home">
      <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_discovery.png" alt="">
      <div slot="active" class="active">
        <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_discovery_prs.png" alt="">
      </div>
      <div slot="title">发现</div>
    </tabBarItem>
    <tabBarItem link="/cloudvillage">
      <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_radio.png" alt="">
      <div slot="active" class="active">
        <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_radio_prs.png" alt="">
      </div>
      <div slot="title">视频</div>
    </tabBarItem>
    <tabBarItem link="/mvideo">
      <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_music.png" alt="">
      <div slot="active" class="active">
        <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_music_prs.png" alt="">
      </div>
      <div slot="title">我的</div>
    </tabBarItem>
    <tabBarItem link="/profile">
      <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_friend.png" alt="">
      <div slot="active" class="active">
        <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_friend_prs.png" alt="">
      </div>
      <div slot="title">云村</div>
    </tabBarItem>
    <tabBarItem link="/use">
      <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_account.png" alt="">
      <div slot="active" class="active">
        <img slot="icon" src="~assets/image/mainTabBar/cm2_btm_icn_discovery_prs.png" alt="">
      </div>
      <div slot="title">账号</div>
    </tabBarItem>
  </tabBar>
</template>

<script>
import tabBar from 'components/common/tabBar/tabBar'
import tabBarItem from 'components/common/tabBar/tabBarItem'

export default {
  name: "",
  components: { tabBar, tabBarItem },
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
.mainTabBar {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.active {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background: red;
  width: 30px;
  height: 30px;
}
.active img {
  width: 20px;
  height: 20px;
}
</style>