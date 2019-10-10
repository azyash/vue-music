<template>
  <div class="playing">
    <bgImg></bgImg>
    <playingNavBar></playingNavBar>
    <playingMain class="playingMain"></playingMain>
    <control class="control"></control>
  </div>
</template>

<script>
import bgImg from './childCpn/bgImg'
import playingNavBar from './childCpn/playingNavBar'
import playingMain from './childCpn/playingMain'
import control from './childCpn/control'

export default {
  name: "",
  components: {
    bgImg,
    playingMain,
    control,
    playingNavBar
  },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {

  },
  mounted () {
  },
}
</script>

<style scoped>
.playing {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
}
.playingMain {
  margin-top: 20%;
}
.control {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}
</style>