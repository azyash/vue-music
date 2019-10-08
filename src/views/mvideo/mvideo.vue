<template>
  <div>
    <mvideoNavBar></mvideoNavBar>
    <scroll class="scroll">
      <div v-if="newMvs">
        <div v-for="(item,index) in newMvs" :key="index">
          <mvItem :mvItem="item"></mvItem>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import { getNewMv } from 'network/mvList'
import scroll from 'common/scroll/scroll'
import mvItem from 'common/mvItem/mvItem'
import mvideoNavBar from './childCpn/mvideoNavBar'

export default {
  name: "",
  components: {
    scroll,
    mvideoNavBar,
    mvItem
  },
  props: {},
  data () {
    return {
      newMvs: []
    }
  },
  watch: {},
  computed: {
    music: function () {
      return this.$store.state.music
    }
  },
  methods: {},
  created () {
    getNewMv().then(res => {
      this.newMvs = res.data.data
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