<template>
  <div>
    <ul>
      <li>
        <img src="~assets/image/use/9.png" alt="">
      </li>
      <li>消息</li>
    </ul>
    <ul>
      <li>
        <img src="~assets/image/use/10.png" alt="">
      </li>
      <li>商城</li>
    </ul>
    <ul>
      <li>
        <img src="~assets/image/use/11.png" alt="">
      </li>
      <li>演出</li>
    </ul>
    <ul>
      <li>
        <img src="~assets/image/use/12.png" alt="">
      </li>
      <li>个性装扮</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
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
div {
  font-weight: 600;
  padding: 10px 0;
  display: flex;
  justify-content: center;
}
ul {
  text-align: center;
  width: 25%;
}
img {
  width: 40px;
  height: 40px;
}
</style>