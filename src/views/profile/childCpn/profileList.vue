<template>
  <div>
    <useItem>
      <div slot="left">
        <img src="~assets/image/use/7.png" alt="">
      </div>
      <div slot="center">扫一扫</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>

    <div class="border"></div>

    <useItem>
      <div slot="left">
        <img src="~assets/image/use/3.png" alt="">
      </div>
      <div slot="center">设置</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>
    <useItem>
      <div slot="left">
        <img src="~assets/image/use/5.png" alt="">
      </div>
      <div slot="center">音乐闹钟</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>
    <useItem>
      <div slot="left">
        <img src="~assets/image/use/1.png" alt="">
      </div>
      <div slot="center">定时关闭</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>

    <div class="border"></div>

    <useItem>
      <div slot="left">
        <img src="~assets/image/use/2.png" alt="">
      </div>
      <div slot="center">定位</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>

    <useItem>
      <div slot="left">
        <img src="~assets/image/use/4.png" alt="">
      </div>
      <div slot="center">购票</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>

    <useItem>
      <div slot="left">
        <img src="~assets/image/use/6.png" alt="">
      </div>
      <div slot="center">优惠券</div>
      <div slot="right" class="el-icon-arrow-right"></div>
    </useItem>

    <div class="border"></div>

    <useItem>
      <div slot="left">
        <img src="~assets/image/use/8.png" alt="">
      </div>
      <div slot="center">免流量</div>
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