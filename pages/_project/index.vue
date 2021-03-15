<template>
  <div class="project-page">
    <Header
      :projectTitle="project.title"
      :pageLink="project.pageLink"
      :github="project.github"
      :isWebsite="project.isWebsite"
    />
    <div class="container">
      <div class="wrap">
        <SectionTitle :title="project.title" :label="pageType" />

        <div class="tech-wrap" data-aos="fade-up">
          <p class="tech" v-for="tech in project.tech" :key="tech">
            {{ tech }}
          </p>
        </div>
        <div
          v-if="project.isWebsite"
          class="carousel-section"
          data-aos="fade-up"
        >
          <Carousel
            class="grab"
            :images="project.images"
            :isWebsite="project.isWebsite"
          />
        </div>
        <div v-else class="mobile-images">
          <img
            class="project-image"
            :src="img"
            alt="img"
            v-for="img in project.images"
            :key="img"
          />
        </div>
        <div class="h-50"></div>
        <h5 class="desc-title" data-aos="fade-up">Project details</h5>
        <p class="desc" data-aos="fade-up">{{ project.description }}</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "~/components/Header.vue";
import Carousel from "~/components/Carousel.vue";
import Button from "~/components/Button.vue";
import Footer from "~/components/Footer.vue";
import SectionTitle from "~/components/SectionTitle.vue";
export default {
  components: {
    Header,
    Carousel,
    Button,
    Footer,
    SectionTitle
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
    ...mapState("projects", ["projects"]),
    pageType() {
      return this.project.isWebsite ? "Website" : "Mobile App";
    }
  }
};
</script>

<style scoped>
.project-page {
  background: var(--grey);
  min-height: 100vh;
}
.wrap {
  padding: 150px 0 0 0;
}

.title {
  margin-bottom: 20px;
  font-weight: 400;
  color: rgb(68, 68, 68);
  text-transform: capitalize;
  letter-spacing: 1px;
}

.tech-wrap {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.tech {
  margin: 0 50px;
  font-size: 12px;
  color: #aaa;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.grab {
  cursor: grab;
}
.grab:active {
  cursor: grabbing;
}
.button-wrap {
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.desc-title {
  color: rgb(71, 71, 71);
  font-weight: bold;
  font-size: 15px;
  margin-top: 40px;
  margin-bottom: 15px;
}

.desc {
  color: var(--desc);
  font-weight: 400;
  font-size: 15px;
  white-space: pre-line;
}

.mobile-images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
}

.project-image {
  width: 220px;
  border-radius: 15px;
  margin: 10px;
  display: block;
  
}

@media (max-width: 600px) {
  .tech {
    margin: 0 10px;
    font-size: 10px;
  }
}
</style>
