<template>
  <div class="tabBarItem" @click="itemClick">
    <div>
      <slot name="icon"></slot>
    </div>
    <div>
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    link: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
    itemClick () {
      this.$router.replace(this.link)
    }
  },
  created () { },
  mounted () { }
}
</script>

<style scoped>
.tabBarItem {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border: 1px solid black;
}
</style>