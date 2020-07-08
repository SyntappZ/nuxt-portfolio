<template>
  <div class="project-page">
    <Header :projectTitle="project.title" />
    <div class="container">
      <div class="wrap">
        <h4 class="title">{{ project.title }}</h4>
        
        <div class="carousel-section">
         <Carousel :images="project.images" />
        </div>
        <h5 class="desc-title">Project details</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "~/components/Header.vue";
import Carousel from "~/components/Carousel.vue";


export default {
  components: {
    Header,
    Carousel
  
  },
  data() {
    return {
      pageId: this.$route.params.project,
      project: {}
    };
  },
  mounted() {
    const project = this.projects.filter(pro => pro.id === this.pageId);
    this.project = project[0];
  },
  computed: {
    ...mapState("projects", ["projects"])
  }
};
</script>

<style scoped>
.project-page {
  background: var(--grey);
  min-height: 100vh;
}
.wrap {
  padding: 200px 0 0 0;
}
.title {
  margin-bottom: 30px;
}
.desc-title {
  color: rgb(71, 71, 71);
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 15px;
}
.carousel-section {
}

.desc {
  color: var(--desc);
  font-weight: 400;
  font-size: 15px;
  white-space: pre-line;

}
</style>