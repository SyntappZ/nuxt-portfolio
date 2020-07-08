<template>
  <div class="carousel">
    <carousel
      :per-page="1"
       paginationColor="#aaa"
      :loop="true"
      :autoplay="true"
      :mouse-drag="true"
      autoplayTimeout="4000"
      paginationActiveColor="#425bb5"
    >
      <slide :style="f" class="slide" v-for="(image, index) in images" :key="index">
          <img :src="image" alt="project image">
      </slide>
    
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide
  },
  props: ["images"]
};
</script>

<style scoped>
.slide {
  height: 550px;
  
}
img {
    width: 100%;
}
</style>