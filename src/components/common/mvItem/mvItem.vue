<template>
  <div v-if="mvDetail" class="mvItem">
    <video :src="mvUrl" controls="controls" :poster="mvDetail.cover"></video>
    <div class="title">
      <span>{{mvDetail.name}}</span>
    </div>
    <div class="detail">
      <img :src="mvDetail.cover" alt="">
      <span>{{mvDetail.artistName}}</span>
      <div class="icon">
        <span>
          <img src="~assets/image/common/cm2_act_icn_praise@2x.png" alt="">
          <i>{{likeCount}}</i>
        </span>
        <span>
          <img src="~assets/image/common/cm2_act_icn_cmt@2x.png" alt="">
          <i>{{commentCount}}</i>
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
  computed: {
    likeCount () {
      if (this.mvDetail.likeCount > 10000) {
        return '1w+'
      }
      else {
        return this.mvDetail.likeCount
      }
    },
    commentCount () {
      if (this.mvDetail.commentCount > 10000) {
        return '1w+'
      }
      else {
        return this.mvDetail.commentCount
      }
    }
  },
  methods: {
    getMultidata () {
      this.$nextTick(() => {
        getMvUrl(this.mvItem.id).then(res => {
          this.mvUrl = res.data.data.url
        })
        getMvDetail(this.mvItem.id).then(res => {
          this.mvDetail = res.data.data
        })
      })
    }
  },
  created () {
    this.getMultidata()
  },
  mounted () {
  }
}
</script>

<style scoped>
.mvItem {
  padding-bottom: 10px;
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
  width: 30px;
  text-align: left;
  font-size: 10px;
  position: absolute;
  top: -6px;
  right: -28px;
}
.icon span:nth-child(2) i {
  width: 30px;
  font-size: 10px;
  position: absolute;
  top: -6px;
  right: -25px;
  background: white;
}
</style>