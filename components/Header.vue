<template>
  <header>
    <nav :class="{'visible-nav': isVisable}">
      <div class="nav-links">
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
</style>