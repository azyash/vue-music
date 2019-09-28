<template>
  <div class="list">
    <recommendSongList v-for="(item,index) in recommendSongLists" :key="index" :item="item" class="item">
    </recommendSongList>
  </div>
</template>

<script>
import recommendSongList from './recommendSongList'

export default {
  name: "",
  components: { recommendSongList },
  props: {
    recommendSongLists: Array
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
  },
  created () {

  },
  mounted () { },
  updated () {
    console.log(this.recommendSongLists)
  },
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  padding-bottom: 5px;
  width: 32%;
}
</style>