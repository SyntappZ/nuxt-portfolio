<template>
  <div :style="{width:buttonWidth + 'px'}" class="btn" @click="handleClick">{{title}}</div>
</template>

<script>
export default {
  props: ["title", "buttonWidth", "handleClick"],
  mounted() {},
  created() {},
 
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
  transition: 0.5s;
  margin: 50px 0;
}


.btn:hover {
  transform: scale(0.9);
}

@media (max-width: 600px) {
  .btn {
  margin: 50px auto;
  }
}

</style>