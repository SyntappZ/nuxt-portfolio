<template>
  <div :class="[{ fadeout: backgroundLoaded }, startScreen]">
 
  </div>
</template>

<script>

export default {
  props: ["backgroundLoaded"],
  components: {
   
  },
  mounted() {

  },
  data() {
    return {
      
      startScreen: "start-screen",
      fadeout: "fadeout"
    };
  }
};
</script>

<style scoped>
.start-screen {
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: white;
  z-index: 100;
}

.fadeout {
  animation: fadeout .5s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
</style>

