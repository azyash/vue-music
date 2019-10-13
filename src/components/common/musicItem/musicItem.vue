<template>
  <div class="musicItem" @click="reviseMusic">
    <div class="left">
      {{index+1}}
    </div>
    <div class="center">
      <div>{{musicItem.name}}</div>
      <!-- <div>{{musicItem.artists[0].name || musicItem.ar[0].name || ''}}-{{musicItem.album.name || musicItem.al.name || ''}}</div> -->
      <div>{{artists}}-{{album}}</div>
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
  computed: {
    artists () {
      if (typeof (this.musicItem.artists) == "undefined") {
        return this.musicItem.ar[0].name
      }
      else {
        return this.musicItem.artists[0].name
      }
    },
    album () {
      if (typeof (this.musicItem.album) == "undefined") {
        return this.musicItem.al.name
      }
      else {
        return this.musicItem.album.name
      }
    }
  },
  methods: {
    reviseMusic () {
      this.$store.commit('musicPlay')
      this.$store.commit('reviseMusic', this.musicUrl)
      this.$store.commit('reviseMusicDetail', this.musicDetail.songs)
    }
  },
  created () {
    getMusicUrl(this.musicItem.id).then(res => {
      this.musicUrl = res.data.data[0].url
    })
    getMusicDetail(this.musicItem.id).then(res => {
      this.musicDetail = res.data
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