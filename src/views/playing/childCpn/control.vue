<template>
  <div class="control">
    <div>
      <img src="~assets/image/playing/ajh.png" alt="">
    </div>
    <div>
      <img @click="musicPause" v-if="activePlay" src="~assets/image/playing/ajd.png" alt="">
      <img @click="musicPlay" v-else src="~assets/image/playing/ajf.png" alt="">
    </div>
    <div>
      <img src="~assets/image/playing/ajb.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data () {
    return {
      activePlay: ''
    }
  },
  watch: {
    '$store.state.musicPlay': function () {
      this.activePlay = this.$store.state.musicPlay
    }
  },
  computed: {},
  methods: {
    musicPlay () {
      this.$store.commit('musicPlay')
    },
    musicPause () {
      this.$store.commit('musicPause')
    }
  },
  created () { },
  mounted () { },
  activated () {
    this.activePlay = this.$store.state.musicPlay
  },
}
</script>

<style scoped>
.control {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
}
.control div {
  display: flex;
  justify-content: center;
}
img {
  width: 60%;
  height: 60%;
}
</style>