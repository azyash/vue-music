<template>
  <div>
    <video :src="mvUrl" controls="controls"></video>
    <div>
      <span>{{mvDetail.name}}</span>
      <span></span>
    </div>
    <div></div>
  </div>
</template>

<script>
import { getMvUrl, getMvDetail } from 'network/mvList'

export default {
  name: "",
  components: {},
  props: {},
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
      getMvUrl('5436745').then(res => {
        this.mvUrl = res.data.data.url
      })
      getMvDetail('5436745').then(res => {
        this.mvDetail = res.data.data
        console.log(this.mvDetail)
      })
    }
  },
  created () {
    this.getMultidata()
  },
  mounted () { }
}
</script>

<style scoped>
video {
  width: 100%;
}
</style>