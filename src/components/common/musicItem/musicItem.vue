<template>
  <div class="musicItem" @click="reviseMusic">
    <div class="left">
      {{index+1}}
    </div>
    <div class="center">
      <div>{{musicItem.name}}</div>
      <div>{{musicItem.ar[0].name}}-{{musicItem.al.name}}</div>
    </div>
    <div class="right">
      <img src="~assets/image/common/ddd.png" alt="">
    </div>
  </div>
</template>

<script>
import { getMusicUrl, getMusicDetail } from 'network/songList';

export default {
  name: "",
  components: {},
  props: {
    musicItem: Object,
    index: Number
  },
  data () {
    return {
      musicUrl: 0,
      musicDetail: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    reviseMusic () {
      this.$store.commit('reviseMusic', this.musicUrl)
      this.$store.commit('reviseMusicDetail', this.musicDetail)
    }
  },
  created () {
    getMusicUrl(this.musicItem.id).then(res => {
      this.musicUrl = res.data.data[0].url
    })
    getMusicDetail(this.musicItem.id).then(res => {
      this.musicDetail = res.data
      // console.log(this.musicDetail)
    })
  },
  mounted () { }
}
</script>

<style scoped>
.musicItem {
  display: flex;
  justify-content: space-between;
  height: 40px;
}
.left,
.right {
  text-align: center;
  line-height: 40px;
  width: 30px;
}
.center {
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.center > div:nth-child(1) {
  color: black;
  font-size: 16px;
}
.center > div:nth-child(2) {
  color: rgb(163, 163, 163);
  font-size: 8px;
}
img {
  height: 20px;
}
</style>