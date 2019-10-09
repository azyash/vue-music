<template>
  <div>
    <playingNavBar></playingNavBar>
    <playingMain></playingMain>
    <div>
      {{this.$store.state.musicDetail}}
    </div>
  </div>
</template>

<script>
import playingNavBar from './childCpn/playingNavBar'
import playingMain from './childCpn/playingMain'

export default {
  name: "",
  components: {
    playingMain,
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
  created () { },
  mounted () { }
}
</script>

<style scoped>
</style>