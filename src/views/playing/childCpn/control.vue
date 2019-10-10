<template>
  <div class="control">
    <div>
      <img src="~assets/image/playing/ajh.png" alt="">
    </div>
    <div>
      <img @click="activePlay=!activePlay" v-if="activePlay" src="~assets/image/playing/ajd.png" alt="">
      <img @click="activePlay=!activePlay" v-else src="~assets/image/playing/ajf.png" alt="">
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
      activePlay: true
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
}
</style>