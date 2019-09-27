<template>
  <div class="daily">
    <div class="left">
      <img src="~assets/image/home/cm2_discover_icn_fm-ip6@2x.png" alt="">
      <p>私人FM</p>
    </div>
    <div class="center">
      <img src="~assets/image/home/cm4_disc_topbtn_daily-ip6@2x.png" alt="">
      <h3>{{date}}</h3>
      <p>每日歌曲推荐</p>
    </div>
    <div class="right">
      <img src="~assets/image/home/cm2_discover_icn_upbill-ip6@2x.png" alt="">
      <p>云音乐热歌榜</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data () {
    return {
      date: 1
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
    var myDate = new Date()
    this.date = myDate.getDate()
  },
  mounted () { }
}
</script>

<style scoped>
.daily {
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  text-align: center;
}
.left,
.center,
.right {
  flex: 1;
  position: relative;
}
img {
  margin: 10px 0;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid red;
}
p {
  font-weight: 700;
}
h3 {
  color: #d33a31;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 46%;
}
</style>