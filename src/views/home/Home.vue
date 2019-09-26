<template>
  <div>
    <homeNavBar></homeNavBar>
    <homeSwiper :banner="banner"></homeSwiper>
    <daily></daily>
  </div>
</template>

<script>
import { getBanner } from 'network/home'
import homeSwiper from './childCpn/homeSwiper'
import homeNavBar from './childCpn/homeNavBar'
import daily from './childCpn/daily'

export default {
  name: "",
  components: {
    homeSwiper,
    homeNavBar,
    daily
  },
  props: {},
  data () {
    return {
      banner: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    /**
     * 网络请求
     */
    getMultidata () {
      getBanner().then(res => {
        this.banner = res.data.banners
      })
    }
  },
  created () {
    this.getMultidata()
  },
  mounted () { }
}
</script>

<style scoped>
</style>