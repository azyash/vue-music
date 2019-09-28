<template>
  <div class="songList">
    <songListHead :songList="songList">

    </songListHead>
  </div>
</template>

<script>
import { getSongList } from 'network/songList'
import songListHead from './childCpn/songListHead'

export default {
  name: "songList",
  components: { songListHead },
  props: {},
  data () {
    return {
      id: 1,
      songList: {},
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
  width: 100%;
  overflow: hidden;
}
</style>