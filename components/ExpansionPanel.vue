<template>
  <div class="expansion-panel">
    <div class="header" @click="panelOpen = !panelOpen">
      <p class="title">{{ title }}</p>
      <div class="icon-wrap" >
        <i v-if="!panelOpen" class="fas fa-chevron-down"></i>
        <i v-else class="fas fa-chevron-up"></i>
      </div>
    </div>
    <div class="slot-content">
      <transition name="fade">
        <slot v-if="panelOpen"></slot>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
  mounted() {},
  created() {},
  data() {
    return {
      panelOpen: false,
      header: "header"
    };
  },
  methods: {},
  computed: {}
};
</script>

<style scoped>
.expansion-panel {
  width: 100%;
  margin: 10px 0;
}
.header {
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  color: #aaa;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
   cursor: pointer;
}
.slot-content {
  width: 100%;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: #eee;
}
.icon-wrap {
  
 
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
