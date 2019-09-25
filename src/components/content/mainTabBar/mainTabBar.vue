<template>
  <tabBar class="mainTabBar">
    <tabBarItem link="/home">
      <div slot="icon">123</div>
      <div slot="title">456</div>
    </tabBarItem>
    <tabBarItem link="/cloudvillage">
      <div slot="icon"></div>
      <div slot="title"></div>
    </tabBarItem>
    <tabBarItem link="/mvideo">
      <div slot="icon"></div>
      <div slot="title"></div>
    </tabBarItem>
    <tabBarItem link="/profile">
      <div slot="icon"></div>
      <div slot="title"></div>
    </tabBarItem>
    <tabBarItem link="/use">
      <div slot="icon"></div>
      <div slot="title"></div>
    </tabBarItem>
  </tabBar>
</template>

<script>
import tabBar from 'components/common/tabBar/tabBar'
import tabBarItem from 'components/common/tabBar/tabBarItem'

export default {
  name: "",
  components: { tabBar, tabBarItem },
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
.mainTabBar {
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>