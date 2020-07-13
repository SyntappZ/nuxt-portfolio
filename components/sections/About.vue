<template>
  <section class="about-section" id="about">
    <div class="container">
      <div class="wrap">
        <transition>
          <div class="about-box" data-aos="fade-up">
            <SectionTitle title="about me" label="about" />

            <div class="h-50"></div>

            <p class="desc">
              Hi im Martyn, i am a web & app developer and i got into coding in 2018,
              since then i have been using frameworks such as Vue & React to build websites/apps and i really love both of them,
              i also like building apps with tech such as React Native & ionic and have just started to learn kotlin
              so i can build native apps in the future, i have also started to get into some backend coding too such as node & express.
            </p>
            <br />
            <p class="desc">
              I've had many different jobs in the past but i feel now is the time for
              me start my journey as a real web developer.
            </p>

            <Button title="read more" buttonWidth="150" @onClick="scrollTo('.skills-section')" />
          </div>
        </transition>

        <div class="about-box image-wrap">
          <div class="about-border" data-aos="fade-up"></div>
          <img src="/images/desk.jpg" alt="desk image" data-aos="fade-right" />
          <h2 class="signature" data-aos="fade-right">syntappz</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../Button.vue";
import SectionTitle from "~/components/SectionTitle.vue";

import { mapActions } from "vuex";
export default {
  props: ["onAbout"],
  components: {
    Button,
    SectionTitle
  },
  mounted() {
     this.windowWidth = window.innerWidth
     
  },
  data() {
    return {
      windowWidth: ""
    };
  },
  methods: {
    ...mapActions(["scrollTo"])
  },
  computed: {
    mobile() {
      return this.windowWidth < 600;
    }
  }
};
</script>

<style scoped>
.about-section {
  width: 100%;
  min-height: 80vh;
}

.wrap {
  width: 100%;
  min-height: 80vh;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.image-wrap {
  display: flex;
  justify-content: flex-end;
  position: relative;
}


img {
  max-width: 70%;
  height: auto;
}

.about-box {
  flex: 1 1 400px;
  height: 100%;
}

.signature {
  font-family: "Rouge Script", cursive;
  /* color: var(--blue); */
  font-weight: 100;
  color: white;
  top: 10px;
  right: 10px;
  font-size: 25px;
  position: absolute;
}

.about-border {
  position: absolute;
  border: 10px solid var(--blue);
  width: 360px;
  height: 360px;
  left: 50px;
  top: 50px;
  z-index: 1;
}

@media (max-width: 600px) {
  .about-border {
    display: none;
  }
  .about-box {
    opacity: 1;
    flex: 1 1 100%;
    
  }
  .image-wrap {
    display: block;
    width: 100%;
    

  }
  img {
    
    max-width: 100%;
    
  }
}
</style>
