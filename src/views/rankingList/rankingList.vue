<template>
  <div>
    <homeNavBar></homeNavBar>
    <scroll class="scroll">
      <div v-for="(item,index) in topList" :key="index">
        <musicItem :musicItem="item" :index="index"></musicItem>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getTopList } from 'network/home'
import musicItem from 'common/musicItem/musicItem'
import homeNavBar from 'views/searchMusic/childCpn/searchMusicNavBar'
import scroll from 'common/scroll/scroll'

export default {
  name: "",
  components: {
    musicItem,
    homeNavBar,
    scroll
  },
  props: {},
  data () {
    return {
      topList: []
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
    getTopList(1).then(res => {
      this.topList = res.data.playlist.tracks
    })
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
</style>