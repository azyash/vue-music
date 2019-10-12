<template>
  <div>
    <div v-for="(item,index) in topList" :key="index">
      <musicItem :musicItem="item" :index="index"></musicItem>
    </div>
  </div>
</template>

<script>
import { getTopList } from 'network/home'
import musicItem from 'common/musicItem/musicItem'

export default {
  name: "",
  components: {
    musicItem
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
      console.log(this.topList)
    })
  },
  mounted () { }
}
</script>

<style scoped>
</style>