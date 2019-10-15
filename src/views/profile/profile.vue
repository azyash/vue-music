<template>
  <div>
    <profileNavBar></profileNavBar>
  </div>
</template>

<script>
import profileList from './childCpn/profileList'
import profileNavBar from './childCpn/profileNavBar'

export default {
  name: "",
  components: {
    profileNavBar,
    profileList
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
</style>