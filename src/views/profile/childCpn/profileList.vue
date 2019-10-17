<template>
  <div>
    <useItem>
      <div slot="left">
        <img src="~assets/image/profile/1.png" alt="">
      </div>
      <div slot="center">我的电台</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>

    <useItem>
      <div slot="left">
        <img src="~assets/image/profile/2.png" alt="">
      </div>
      <div slot="center">我的收藏</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>
  </div>
</template>

<script>
import useItem from 'common/trItem/trItem'

export default {
  name: "",
  components: {
    useItem
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
img {
  width: 20px;
}
.border {
  height: 10px;
  width: 100%;
}
</style>