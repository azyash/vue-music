<template>
  <div>
    <useNavBar></useNavBar>
    <scroll class="scroll">
      <useTop></useTop>
      <useList></useList>
    </scroll>
  </div>
</template>

<script>
import scroll from 'common/scroll/scroll'
import useNavBar from './childCpn/useNavBar'
import useTop from './childCpn/useTop'
import useList from './childCpn/useList'

export default {
  name: "",
  components: {
    scroll,
    useNavBar,
    useTop,
    useList
  },
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
.scroll {
  padding: 0 10px;
  overflow: hidden;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 50px;
}
</style>