<template>
  <section class="skills-section" ref="skillsSection">
    <div class="container">
      <div class="wrap">
        <SectionTitle title="timeline" label="skills" />

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
import { mapState, mapActions } from "vuex";
import SectionTitle from "~/components/SectionTitle.vue";

export default {
  components: {
    Year,
    SectionTitle
  },
  mounted() {
    const top = this.$refs.skillsSection.offsetTop;
    this.getSelectionPosition({ section: "skillsPosition", position: top - 10 });
  },

  data() {
    return {};
  },
  methods: {
    ...mapActions(["getSelectionPosition"])
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

@media (max-width: 1024px) {
  .bar {
    display: none;
  }
}
</style>
