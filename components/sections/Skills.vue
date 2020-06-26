<template>
  <section class="skills-section">
    <div class="container">
      <div class="wrap">
        <h4>skills</h4>
        <br />
        <h1 class="size-50">timeline</h1>

        <div class="timeline">
          <div class="bar"></div>
          <div v-for="(year, index) in timelineSkills" :key="index">
            <Year
              :label="year.label"
              :title="year.title"
              :subtitle="year.subtitle"
              :skills="year.skills"
              :descTitle="year.descTitle"
              :description="year.description"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Year from "../Year.vue";
import { mapState } from "vuex";
export default {
  components: {
    Year
  },
  data() {
    return {};
  },
  mounted() {
    // console.log(this.timelineSkills);
  },
  computed: {
    ...mapState("skills", ["timelineSkills"])
  }
};
</script>

<style scoped>
.skills-section {
  width: 100%;
  min-height: 100vh;
  background: var(--grey);
}
.wrap {
  padding: 100px 0;
}
.timeline {
  width: 100%;
  position: relative;
  margin: 50px 0;
}
.bar {
  background-color: black;
  position: absolute;
  top: 0;
  left: 27px;
  width: 2px;
  height: 100%;
}
</style>