<template>
  <navBar class="navBar">
    <div slot="center">
      最新MV
    </div>
    <div slot="right">
      <img src="~assets/image/common/musicicon.png" alt="">
    </div>
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
  padding: 0 10px;
}
div {
  font-size: 20px;
}
img {
  width: 18px;
}
</style>