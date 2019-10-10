<template>
  <navBar class="navBar">
    <div slot="left" class="el-icon-arrow-left" @click="back"></div>
    <div slot="center" class="center" v-if="this.$store.state.musicDetail.length">
      {{this.$store.state.musicDetail[0].name}}
    </div>
  </navBar>
</template>

<script>
import navBar from 'common/navBar/navBar'

export default {
  name: "",
  components: { navBar },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    back () {
      this.$router.go(-1)
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
div {
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  color: white;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
img {
  width: 18px;
}
</style>