<template>
  <header>
    <nav :class="{ 'visible-nav': isVisable || projectTitle }">
      <div class="nav-links" v-if="projectTitle">
        <div class="back-button" @click="goBack">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <p class="project-title">{{ projectTitle }}</p>
        <div class="project-links">
          <a :href="github" target="_">{{ github ? "Github" : "No Github" }}</a>
          <a :href="pageLink" target="_"
            >Visit {{ isWebsite ? "site" : "app" }}</a
          >
        </div>
      </div>

      <div class="nav-links" v-else>
        <p
          v-for="link in links"
          :key="link.title"
          :class="{ link: true, underline: link.title === currentSection }"
          @click="jumpToSection(link.jumpTo)"
        >
          {{ link.title }}
        </p>
      </div>
    </nav>
  </header>
</template>

<script>
import jump from "jump.js";
import { mapActions, mapState } from "vuex";
export default {
  props: ["projectTitle", "pageLink", "github", "isWebsite", "isVisable"],
  mounted() {
    document.addEventListener("scroll", this.scroller);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scroller);
  },
  data() {
    return {
      navColor: "transparent",
      links: [
        { title: "about", jumpTo: ".about-section" },
        { title: "skills", jumpTo: ".skills-section" },
        { title: "projects", jumpTo: ".projects-section" },
        { title: "contact", jumpTo: ".contact-section" }
      ],
      currentSection: ""
      
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },

    ...mapActions(["scrollTo"]),

    jumpToSection(target) {
      this.scrollTo(target);
    },
    scroller() {
      if (scrollY >= this.aboutPosition && scrollY < this.skillsPosition) {
        this.currentSection = "about";
      } else if (
        scrollY >= this.skillsPosition &&
        scrollY < this.projectsPosition
      ) {
        this.currentSection = "skills";
      } else if (
        scrollY >= this.projectsPosition &&
        scrollY < this.contactPosition
      ) {
        this.currentSection = "projects";
      } else if (scrollY >= this.contactPosition) {
        this.currentSection = "contact";
      } else {
        this.currentSection = "";
      }
    }
  },

  computed: {
    ...mapState([
      "aboutPosition",
      "skillsPosition",
      "projectsPosition",
      "contactPosition"
    ])
  }
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
  flex-wrap: wrap;
}

.link {
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #444;
  font-size: 11px;
  font-weight: bold;
  text-decoration: none;
  padding: 5px 20px;
  cursor: pointer;
  margin: 20px 0;
  transition: 0.3s;
  border: 1px solid transparent;
}

.link:hover {
  color: var(--blue);
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

.underline {
  color: var(--blue);
  /* background-color: var(--blue); */
  border-left: solid 1px var(--blue);
  border-right: solid 1px var(--blue);
  /* background: #384d9915; */
}

@media (max-width: 600px) {
  .nav-links p {
    padding: 20px 10px;
  }
  .project-links {
    position: relative;
    width: 100%;
    justify-content: space-between;
    right: 0;
  }
  .project-title {
    width: 100%;
  }
  .back-button {
    width: auto;
    left: 30px;
    top: 23px;
    height: auto;
  }
}
</style>
