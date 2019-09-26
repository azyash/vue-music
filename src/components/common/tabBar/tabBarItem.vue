<template>
  <div class="tabBarItem" @click="itemClick">
    <div class="icon">
      <transition name="fade">
        <slot v-if="!isShow" name="icon"></slot>
        <slot v-else name="active"></slot>
      </transition>
    </div>
    <div :class="{'title':true,'textActive':isShow}">
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
  computed: {
    isShow () {
      return this.$route.path.indexOf(this.link) !== -1
    }
  },
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
}
.icon {
  position: absolute;
  top: 3px;
  width: 30px;
  height: 30px;
}
.icon img {
  width: 30px;
  height: 30px;
}
.title {
  position: absolute;
  bottom: 0px;
  font-size: 10px;
}
.textActive {
  color: red;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter {
  opacity: 0;
  width: 30px;
  height: 30px;
}
</style>