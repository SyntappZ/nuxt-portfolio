<template>
  <header>
    <nav class="nav" :style="{background: this.navColor}">
      <div class="nav-links">
        <p @click="jumpToSection('.about-section')">about</p>
        <p>skills</p>
        <p>projects</p>
        <p>contact</p>
      </div>
    </nav>
  </header>
</template>

<script>
import jump from "jump.js";
export default {
  mounted() {
    document.addEventListener("scroll", this.scroller);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scroller);
  },
  data() {
    return {
      navColor: "transparent"
    };
  },
  methods: {
    scroller() {
      scrollY > 70
        ? (this.navColor = "white")
        : (this.navColor = "transparent");
    },

    jumpToSection(target) {
      jump(target);
    }
  }
};
</script>

<style scoped>
nav {
  text-align: center;
  position: fixed;
  width: 100%;
  transition: ease 0.3s;
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