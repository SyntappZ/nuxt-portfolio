<template>
  <nuxt-link :to="id">
    <div class="project">
      <img class="background-image" :src="thumbnail" alt="jeff" />
      <div class="cover">
        <div class="top">
          <h3 class="title">{{ title }}</h3>
        </div>
        <div class="bottom">
          <div class="tech-wrap">
            <p class="tech" v-for="(tech, index) in techArray" :key="index">{{ tech }}</p>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ["thumbnail", "title", "techArray", "id"],

  mounted() {
    // console.log(this.techArray);
  }
};
</script>

<style scoped>
.project {
  width: 352px;
  height: 352px;
  cursor: pointer;
  margin: 10px 0;
  position: relative;
  overflow: hidden;
}

.project:hover .cover {
  top: 0;
  opacity: 1;
}
.project:hover .top {
  opacity: 1;
  top: 0;
}
.project:hover .bottom {
  opacity: 1;
  top: 0;
}

.background-image {
  width: 100%;
  height: 100%;
  position: absolute;
}

.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  background: var(--blue);
  transition: 0.3s;
  top: 352px;
  opacity: 0;
}

.top,
.bottom {
  height: 50%;
  width: 100%;
  color: white;
  position: relative;
  opacity: 0;
  transition: 0.3s;
  transition-delay: 0.3s;
}

.top {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  top: -100px;
}

.bottom {
  top: 100px;
}

.tech-wrap {
  display: flex;
  justify-content: center;
}

.title {
  margin-bottom: 10px;
}
.tech {
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  margin: 0 5px;
  text-transform: capitalize;
}
</style>