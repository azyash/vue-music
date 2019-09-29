<template>
  <div class="musicItem">
    <div class="left">
      {{index+1}}
    </div>
    <div class="center">
      <div>{{musicItem.name}}</div>
      <div>{{musicItem.ar[0].name}}-{{musicItem.al.name}}</div>
    </div>
    <div class="right">
      <img src="~assets/image/common/ddd.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    musicItem: Object,
    index: Number
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
  mounted () { }
}
</script>

<style scoped>
.musicItem {
  display: flex;
  justify-content: space-between;
  height: 40px;
}
.left,
.right {
  text-align: center;
  line-height: 40px;
  width: 30px;
}
.center {
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.center > div:nth-child(1) {
  color: black;
  font-size: 16px;
}
.center > div:nth-child(2) {
  color: rgb(163, 163, 163);
  font-size: 8px;
}
img {
  height: 20px;
}
</style>