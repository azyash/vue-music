<template>
  <navBar class="navBar">
    <img src="" alt="">
    <div slot="center" class="center">
      账号
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
      message: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    onSubmit (message) {
      this.$router.push({
        path: '/searchmusic',
        query: {
          message: message
        }
      })
      return false
    },
  },
  created () { },
  mounted () { },
}
</script>

<style scoped>
img {
  width: 18px;
}
.center {
  font-size: 18px;
  font-weight: 1000;
}
</style>