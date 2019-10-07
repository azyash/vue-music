<template>
  <div v-if="recommendMv">
    <div v-for="(item,index) in recommendMv" :key="index">
      <mvItem :mvItem="item"></mvItem>
    </div>
  </div>
</template>

<script>
import mvItem from 'common/mvItem/mvItem'

export default {
  name: "",
  components: {
    mvItem
  },
  props: {
    recommendMv: Array
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {

  },
  mounted () {

  }
}
</script>

<style scoped>
</style>