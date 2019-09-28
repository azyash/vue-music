<template>
  <div @click="goToSongList">
    <img :src="item.picUrl" alt="">
    <p>{{item.name}}</p>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: { item: Object },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    goToSongList () {
      let id = this.item.id
      this.$router.push({ path: '/songlist', query: { id } })
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 5px;
}
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>