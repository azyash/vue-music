<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {
    music: function () {
      return this.$store.state.music
    }
  },
  methods: {
    asdf () {
      this.$store.commit('reviseMusic', 'http://m8.music.126.net/20191001163905/1080fe6c2abf5f71930fca2e1682f55a/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3')
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
</style>