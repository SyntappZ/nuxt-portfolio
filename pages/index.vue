<template>
  <div class="main">
    <StartScreen :backgroundLoaded="backgroundLoaded" />
    <img src="/images/background1.jpg" alt="wolf background" @load="loaded" />
    <Header :isVisable="isVisable" />
    <div class="background">
      <div class="container">
        <div :class="[{ fadeup:backgroundLoaded }, welcome]">
          <h4>martyn dodds</h4>
          <h1>web &</h1>
          <h1>app developer</h1>
        </div>
      </div>
    </div>
    <About />
    <Skills />
    <Projects />
    <Contact />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import About from "~/components/sections/About";
import Skills from "~/components/sections/Skills";
import Projects from "~/components/sections/Projects";
import Contact from "~/components/sections/Contact";
import StartScreen from "../components/StartScreen.vue";
import { mapActions } from "vuex";
export default {
  components: {
    About,
    Skills,
    Projects,
    Contact,
    Header,
    StartScreen
  },
  mounted() {
    document.addEventListener("scroll", this.scroller);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scroller);
  },
  data() {
    return {
      backgroundLoaded: false,
      isVisable: false,
      welcome: "welcome",
      fadeup: "fadeup"
    };
  },
  methods: {
    loaded() {
      this.backgroundLoaded = true;
    },
    scroller() {
      scrollY > 70 ? (this.isVisable = true) : (this.isVisable = false);
      if (scrollY < 10) {
        this.resetScroll();
      }
    },

    ...mapActions(["resetScroll", "scrollTo"])
  },
  computed: {}
};
</script>

<style scoped>
.background {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
}

img {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  overflow: hidden;
  left: 0;
  z-index: -1;
}

.fadeup {
  animation: fadeup 1s forwards;
  animation-delay: .3s;
}

@keyframes fadeup {
  to {
    opacity: 1;
    margin-bottom: 100px;
  }
}
/* .fadeup {
  opacity: 1;
  margin-bottom: 100px;
} */

.welcome {
  width: 100%;
  text-transform: capitalize;
  transition: 1s ease;
  opacity: 0;
}


.welcome h4 {
  margin-bottom: 15px;
}


</style>
