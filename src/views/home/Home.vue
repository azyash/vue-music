<template>
  <div>
    <homeSwiper :banner="banner"></homeSwiper>
  </div>
</template>

<script>
import { getBanner } from 'network/home'
import homeSwiper from './childCpn/homeSwiper'

export default {
  name: "",
  components: { homeSwiper },
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
        console.log(this.banner)
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