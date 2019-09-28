<template>
  <div>
    <homeNavBar></homeNavBar>
    <scroll class="scroll">
      <homeSwiper :banner="banner"></homeSwiper>
      <daily></daily>
      <Wtitle :title="'推荐歌单'"></Wtitle>
      <Rdiv :recommendSongLists="recommendSongLists" class="Rdiv"></Rdiv>
    </scroll>
  </div>
</template>

<script>
import { getBanner, getRecommendSongList } from 'network/home'
import Rdiv from 'common/recommendSongList/recommendSongList-div'
import scroll from 'common/scroll/scroll'
import homeSwiper from './childCpn/homeSwiper'
import homeNavBar from './childCpn/homeNavBar'
import Wtitle from './childCpn/Wtitle'
import daily from './childCpn/daily'

export default {
  name: "",
  components: {
    Rdiv,
    scroll,
    homeSwiper,
    homeNavBar,
    daily,
    Wtitle
  },
  props: {},
  data () {
    return {
      banner: [],
      recommendSongLists: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    /**
     * 网络请求
     */
    getMultidata () {
      getBanner().then(res => {
        this.banner = res.data.banners
      })
      getRecommendSongList('6').then(res => {
        this.recommendSongLists = res.data.result
        console.log(res)
      })
    }
  },
  created () {
    this.getMultidata()
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
.Rdiv {
  margin-top: 10px;
}
</style>