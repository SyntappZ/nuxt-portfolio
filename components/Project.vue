<template>
  <div class="project">
  <img class="background-image" :src="thumbnail" alt="jeff">
  </div>
</template>

<script>
export default {
  props: ['thumbnail'],

  mounted() {
    console.log(this.thumbnail)
  }
}
</script>

<style scoped>
.project {
  width: 352px;
  height: 352px;
  cursor: pointer;
  margin: 10px 0;
}

.background-image {
  width: 100%;
  height: 100%;
 

}


</style>