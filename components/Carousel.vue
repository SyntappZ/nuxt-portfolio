<template>
  <div class="carousel">
    <carousel
      :per-page="pageNumber"
      paginationColor="#aaa"
      :loop="true"
      :autoplay="true"
      :mouse-drag="true"
      :autoplayTimeout="4000"
      paginationActiveColor="#425bb5"
      :style="[isWebsite ? {width: '100%'} : {width: '85%', margin: 'auto'}]"
    >
      <slide
       
        class="slide"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="image" alt="project image" />
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  updated() {
    
  },
  components: {
    Carousel,
    Slide
  },
  props: ["images", "isWebsite"],
  computed: {
    pageNumber() {
      return this.isWebsite ? 1 : 3;
    }
  }
};
</script>

<style scoped>
.carousel {
  background: #e6e6e6;
  padding-bottom: 10px;
}
.slide {
  height: 550px;

}

img {
  width: 100%;
}
</style>