<template>
  <div :style="{width:buttonWidth + 'px'}" class="btn" @click="onClick">{{title}}</div>
</template>

<script>
export default {
  props: ["title", "handleClick", "buttonWidth"],
  mounted() {
    
  },
   created() {
    
  },
  methods: {
      onClick() {
          this.$emit('onClick');
      }
  }

};
</script>

<style scoped>
.btn {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  letter-spacing: 2px;
  color: white;
  border-radius: 50px;
  background: var(--linearMix);
  cursor: pointer;
  transition: .5s;
  margin: 50px 0;
}
.btn:hover {
   transform: scale(.9);
}
</style>