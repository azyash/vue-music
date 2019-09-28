<template>
  <navBar class="navBar">
    <img src="" alt="">
    <div slot="center">
      <form>
        <input type="text" placeholder="单曲/歌单/电台">
      </form>
    </div>
    <div slot="right">
      <img src="~assets/image/common/musicicon.png" alt="">
    </div>
  </navBar>
</template>

<script>
import navBar from 'components/common/navBar/navBar'

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
  methods: {},
  created () { },
  mounted () { }
}
</script>

<style scoped>
input {
  padding-left: 10px;
  width: 60vw;
  height: 28px;
  border-radius: 42px;
  background: #eee;
  float: right;
}

form {
  position: relative;
  width: 60vw;
  margin: 0 auto;
}
input::-ms-input-placeholder {
  text-align: center;
}
input::-webkit-input-placeholder {
  text-align: center;
}
img {
  width: 18px;
}
</style>