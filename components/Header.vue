<template>
  <header>
    <nav :class="{'visible-nav': isVisable || projectTitle }">
      <div class="nav-links" v-if="projectTitle">
        <div class="back-button" @click="goBack">
         <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <p>{{projectTitle}}</p>
        <div class="project-links">
          <a :href="github" target="_">Github</a>
          <a :href="pageLink" target="_">Visit {{isWebsite ? 'site' : 'app'}}</a>
        </div>
      </div>


      <div class="nav-links" v-else>
        <p @click="jumpToSection('.about-section')">about</p>
        <p @click="jumpToSection('.skills-section')">skills</p>
        <p @click="jumpToSection('.projects-section')">projects</p>
        <p @click="jumpToSection('.contact-section')">contact</p>
      </div>
    </nav>
  </header>
</template>

<script>
import jump from "jump.js";
import { mapActions } from "vuex";
export default {
  props: ["projectTitle", 'pageLink', 'github', 'isWebsite'],
  mounted() {
    document.addEventListener("scroll", this.scroller);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scroller);
  },
  data() {
    return {
      navColor: "transparent",
      isVisable: false
    };
  },
  methods: {
    scroller() {
      scrollY > 70 ? (this.isVisable = true) : (this.isVisable = false);
      if (scrollY < 10) {
        this.resetScroll()
      }
    },

    goBack() {
      this.$router.back()
    },

    ...mapActions(["scrollTo", "resetScroll"]),

    jumpToSection(target) {
      this.scrollTo(target);
    }
  },
  computed: {}
};
</script>

<style scoped>
nav {
  text-align: center;
  position: fixed;
  width: 100%;
  transition: ease 0.5s;
  z-index: 10;
  padding-top: 15px;
}

.visible-nav {
  background: white;
  padding: 0;
  border-bottom: solid 1px var(--grey);
}

.project-links {
  height: 100%;

  position: absolute;
  right: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-links a {
  text-decoration: none;
  font-weight: bold;
  color: var(--blue);
  margin: 0 30px;
  text-transform: capitalize;
  padding: 10px;
  font-size: 15px;
  cursor: pointer;
}
.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
.nav-links p {
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #444;
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
  padding: 25px;
  cursor: pointer;
}
.back-button {
  position: absolute;
  left: 50px;
  cursor: pointer;
  color: var(--blue);
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
</style>