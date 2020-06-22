<template>
  <section class="about-section" id="about">
    <div class="container">
      <div class="wrap">
        <div class="about-box">
          <h4>about</h4>
          <br />

          <h1 class="size-50">about me</h1>
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
        <div class="about-box">
          <div class="about-border"></div>
          <img src="~/assets/hand.jpg" alt="desk image" />
          <h2 class="signature">syntappz</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from "../Button.vue";
import {mapActions} from 'vuex'
export default {
  components: {
    Button
  },
  methods: {
    ...mapActions(["scrollTo"]),
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

img {
  max-width: 70%;
  /* object-fit: cover; */
  height: auto;
  /* filter:grayscale(100%); */
  /* opacity: .5; */
}

.about-box {
  flex: 1 1 400px;
  height: 100%;
}
.about-box:nth-child(2) {
  display: flex;
  justify-content: flex-end;
  position: relative;
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
</style>
