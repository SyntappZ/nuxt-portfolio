<template>
  <div class="main">
    <Header />
    <div class="background">
      <div class="container">
        <div class="welcome">
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

export default {
  components: {
    About,
    Skills,
    Projects,
    Contact,
    Header
  }
};
</script>

<style scoped>
.background {
  background: url("/images/background.jpg");
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
}

.welcome {
  width: 100%;
  text-transform: capitalize;
  margin-bottom: 100px;
}

.welcome h4 {
  margin-bottom: 15px;
}
</style>
