<template>
  <div class="projects-section">
    <div class="container">
      <div class="wrap">
        <SectionTitle title="my projects" label="projects" />

        <div class="projects">
          <Project
            v-for="image in projectsThumbnails"
            :key="image.id"
            :thumbnail="image.thumbnail"
            :title="image.title"
            :techArray="image.tech"
            :id="image.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Project from "../Project.vue";
import SectionTitle from "~/components/SectionTitle.vue";

import { mapState } from "vuex";
export default {
  mounted() {},
  components: {
    Project,
    SectionTitle
  },
  computed: {
    ...mapState("projects", ["projectsThumbnails"])
  }
};
</script>

<style scoped>
.projects-section {
  min-height: 100vh;
}
.wrap {
  width: 100%;
  padding: 100px 0;
}
.projects {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 50px 0;
}
</style>