<template>
  <div class="project">
    <img class="background-image" :src="thumbnail" alt="jeff" />
    <div class="cover flex-center">
      <div class="center">
        <h2 class="title">{{title}}</h2>
        <p class="tech">tech jeff</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["thumbnail", "title"],

  mounted() {
    console.log(this.thumbnail);
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
.project:hover .center {
   opacity: 1;
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

.center {
  color: white;
  text-align: center;
  text-transform: capitalize;
  transition: .3s;
  opacity: 0;
  transition-delay: .3s;
}

.title {
  margin-bottom: 10px;
}
.tech {
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
}
</style>