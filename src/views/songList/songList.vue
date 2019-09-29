<template>
  <div class="songList">
    <songListNavBar class="songListNavBar" />
    <songListHead :songList="songList" />
    <musicItemBox class="musicItemBox" :musicItem="musicItem" />
  </div>
</template>

<script>
import { getSongList } from 'network/songList'
import songListHead from './childCpn/songListHead'
import songListNavBar from './childCpn/songListNavBar'
import musicItemBox from './childCpn/musicItemBox'

export default {
  name: "songList",
  components: { songListHead, musicItemBox, songListNavBar },
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
        console.log(this.songList)
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
.songList {
  position: relative;
  width: 100%;
  overflow: hidden;
}
.musicItemBox {
  margin-top: -20px;
}
</style>