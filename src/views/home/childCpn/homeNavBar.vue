<template>
  <navBar class="navBar">
    <img src="" alt="">
    <input slot="center" class="txt" type="text" placeholder="单曲/歌单/电台">
    <img src="" alt="">
  </navBar>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

export default {
  name: "",
  components: { navBar },
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
.navBar {
  background: red;
}
</style>