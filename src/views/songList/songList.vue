<template>
  <div class="songList">
    <backTop class="backTop">
      <img src="~assets/image/common/top.png" alt="">
    </backTop>
    <songListNavBar />
    <songListHead :songList="songList" />
    <musicItemBox class="musicItemBox" :musicItem="musicItem" />

  </div>
</template>

<script>
import { getSongList } from 'network/songList'
import backTop from 'components/content/backTop/backTop'
import songListHead from './childCpn/songListHead'
import songListNavBar from './childCpn/songListNavBar'
import musicItemBox from './childCpn/musicItemBox'

export default {
  name: "songList",
  components: {
    songListHead,
    musicItemBox,
    songListNavBar,
    backTop
  },
  props: {},
  data () {
    return {
      id: 1,
      songList: {},
      musicItem: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    /**
     * 网络请求
     */
    getMultidata () {
      getSongList(this.id).then(res => {
        this.songList = res.data
        this.musicItem = res.data.playlist.tracks
      })
    }
  },
  created () {
    this.id = this.$route.query.id
    this.getMultidata()
  },
  mounted () { },
  activated () {

  },
}
</script>

<style scoped>
.backTop {
  position: fixed;
  bottom: 80px;
  right: 30px;
}
.songList {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.musicItemBox {
  margin-top: -20px;
}
</style>