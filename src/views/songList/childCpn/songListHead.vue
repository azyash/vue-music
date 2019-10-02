<template>
  <div v-if="songList.playlist">
    <div class="bgImg">
      <img :src="songList.playlist.coverImgUrl" alt="">
    </div>
    <div class="head">
      <img :src="songList.playlist.coverImgUrl" alt="">
      <div>
        <h2>{{songList.playlist.name}}</h2>
        <div>
          <ul>
            <li>
              <img :src="songList.playlist.creator.avatarUrl" alt="">
            </li>
            <li>{{songList.playlist.creator.nickname}}</li>
          </ul>
        </div>
        <div>
          <p>{{songList.playlist.description}}</p>
        </div>
      </div>
    </div>
    <div>
      <ol>
        <li>
          <img src="~assets/image/songList/cm2_list_detail_icn_cmt@2x.png" alt="">
          <p>{{songList.playlist.shareCount}}</p>
        </li>
        <li>
          <img src="~assets/image/songList/cm2_list_detail_icn_share@2x.png" alt="">
          <p>{{songList.playlist.commentCount}}</p>
        </li>
        <li>
          <img src="~assets/image/songList/cm2_list_detail_icn_fav_new@2x.png" alt="">
          <p>收藏</p>
        </li>
        <li>
          <img src="~assets/image/songList/cm2_list_detail_icn_dld@2x.png" alt="">
          <p>下载</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import songListNavBar from './songListNavBar'
export default {
  name: "",
  components: {
    songListNavBar
  },
  props: {
    songList: Object
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
  },
  mounted () {
  },
}
</script>

<style scoped>
.bgImg {
  z-index: -1;
  position: absolute;
  width: 130%;
  left: -10%;
  top: -10%;
  overflow: hidden;
  filter: blur(30px);
}
.bgImg img {
  width: 100%;
}
.head {
  color: rgb(206, 206, 206);
  display: flex;
  padding: 5px 10px;
}
h2 {
  color: white;
}
.head > img:nth-child(1) {
  width: 40%;
  height: 40%;
  border-radius: 5px;
}
.head > div {
  padding-left: 15px;
  width: 60%;
}
ul li img {
  width: 2rem;
  border-radius: 1rem;
}
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
ul {
  padding: 10px 0;
  display: flex;
  align-items: center;
}
ul li {
  font-weight: 900;
  margin-right: 5px;
}
ol {
  padding-bottom: 20px;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
ol img {
  width: 50px;
}
ol li {
  color: white;
  text-align: center;
}
ol li p {
  position: relative;
  top: -7px;
}
</style>