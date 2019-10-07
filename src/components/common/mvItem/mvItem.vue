<template>
  <div v-if="mvDetail" class="mvItem">
    <video :src="mvUrl" controls="controls"></video>
    <div class="title">
      <span>{{mvDetail.name}}</span>
    </div>
    <div class="detail">
      <img :src="mvDetail.cover" alt="">
      <span>{{mvDetail.artistName}}</span>
      <div class="icon">
        <span>
          <img src="~assets/image/common/cm2_act_icn_praise@2x.png" alt="">
          <i>{{mvDetail.likeCount}}</i>
        </span>
        <span>
          <img src="~assets/image/common/cm2_act_icn_cmt@2x.png" alt="">
          <i>{{mvDetail.commentCount}}</i>
        </span>
        <span><img src="~assets/image/common/ddd.png" alt=""></span>
      </div>
    </div>
  </div>
</template>

<script>
import { getMvUrl, getMvDetail } from 'network/mvList'

export default {
  name: "",
  components: {},
  props: {
    mvItem: Object
  },
  data () {
    return {
      mvUrl: '',
      mvDetail: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    getMultidata () {
      this.$nextTick(() => {
        getMvUrl(this.mvItem.id).then(res => {
          this.mvUrl = res.data.data.url
        })
        getMvDetail(this.mvItem.id).then(res => {
          this.mvDetail = res.data.data
          console.log(this.mvDetail)
        })
      })
    }
  },
  created () {
    this.getMultidata()
    console.log(this.mvItem)
  },
  mounted () {
  }
}
</script>

<style scoped>
.mvItem {
  padding: 10px 0;
}
video {
  width: 100%;
}
.title {
  margin: 3px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: 3px 0;
}
.detail {
  margin-top: 5px;
}
.detail > img {
  margin-right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
}
.icon {
  float: right;
  width: 100px;
  display: flex;
  justify-content: space-between;
}
.icon span:nth-child(1) img,
.icon span:nth-child(2) img,
.icon span:nth-child(3) img {
  width: 18px;
}
.icon span {
  position: relative;
}
.icon span:nth-child(1) i {
  font-size: 10px;
  position: absolute;
  top: -6px;
  right: -6px;
}
.icon span:nth-child(2) i {
  font-size: 10px;
  position: absolute;
  top: -6px;
  right: 0px;
  background: white;
}
</style>