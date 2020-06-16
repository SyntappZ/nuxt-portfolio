<template>
  <div class="main">
    <div class="background">
      <div class="container">
        <div class="welcome">
          <h4>martyn dodds</h4>
          <h1>web &</h1>
          <h1>app developer</h1>
        </div>
      </div>
    </div>
  <About  />
  </div>
</template>

<script>
import About from '~/components/About.vue';
import jump from 'jump.js';
export default {
  components: {
    About
  },
  
 
};
</script>

<style scoped>
.background {
  background: url("~assets/background.jpg");
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
