<template>
  <navBar class="navBar">
    <img src="" alt="">
    <div slot="center">
      <form>
        <input type="text" placeholder="单曲/歌单/电台">
        <button class="el-icon-search" type="submit"></button>
      </form>
    </div>
    <img src="" alt="">
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
  height: 30px;
  border-radius: 42px;
  background: #eee;
  transition: 0.1s linear;
  float: right;
}

input:focus {
  width: 70vw;
}
button {
  background: #eee;
  position: absolute;
  right: 10px;
  transform: translate(0, 55%);
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
</style>