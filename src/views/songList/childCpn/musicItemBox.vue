<template>
  <div class="musicItemBox">
    <div v-for="(item,index) in musicItem" :key="index">
      <musicItem :musicItem="item" :index="index"></musicItem>
    </div>
  </div>
</template>

<script>
import musicItem from 'common/musicItem/musicItem'

export default {
  name: "",
  components: { musicItem },
  props: { musicItem: Array },
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
.musicItemBox {
  padding-top: 30px;
  border-radius: 25px 25px;
  background: white;
  height: 1000px;
  width: 100%;
  z-index: 2;
}
</style>