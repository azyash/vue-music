<template>
  <div class="searchMusic">
    <searchMusicNavBar></searchMusicNavBar>
    <scroll class="scroll" v-if="this.musicItems">
      <div v-for="(item,index) in musicItems" :key="index">
        <musicItem :musicItem='item' :index='index'></musicItem>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getSearch } from 'network/home'
import musicItem from 'common/musicItem/musicItem'
import searchMusicNavBar from './childCpn/searchMusicNavBar'
import scroll from 'common/scroll/scroll'

export default {
  name: "",
  components: {
    musicItem,
    searchMusicNavBar,
    scroll
  },
  props: {},
  data () {
    return {
      musicItems: ''
    }
  },
  watch: {
  },
  computed: {},
  methods: {
    getMultidata () {
      getSearch(this.$route.query.message || '海阔天空').then(res => {
        this.musicItems = res.data.result.songs
      })
    }
  },
  created () {
  },
  mounted () { },
  activated () {
    this.getMultidata()
  },
  deactivated () {
    this.musicItems = ''
  },
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