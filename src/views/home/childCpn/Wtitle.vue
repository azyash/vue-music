<template>
  <div>
    <ul>
      <li>{{title}}</li>
      <li><i class="el-icon-arrow-right"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    title: String
  },
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
ul {
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  border-left: 2px solid red;
}
ul > li:nth-child(1) {
  padding: 0 4px;
}
</style>