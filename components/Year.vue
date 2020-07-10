<template>
  <div class="year" data-aos="fade-up">
    <div class="diamond"></div>
    <div class="wrap">
      <p>{{label}}</p>
      <h2 class="title">{{title}}</h2>
      <h4>{{ subtitle }}</h4>
     
      <h5 class="desc-title">{{descTitle}}</h5>
      <h5 class="desc">{{description}}</h5>
       <ul class="list">
        <li v-for="(skill, index) in skills" :key="index">{{skill}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "title", "subtitle", "description", "descTitle", "skills"]
};
</script>

<style scoped>
.year {
  width: 100%;
  
  position: relative;
}
.diamond {
  width: 15px;
  height: 15px;
  background: var(--blue);
  top: 0;
  left: 20px;
  position: absolute;
  outline: solid 10px var(--grey);
  transform: rotate(45deg);
}

.wrap {
  padding: 2em;
  position: relative;
  top: -40px;
  left: 50px;
  width: 100%;
  min-height: 150px;
}
.wrap p {
  background: black;
  padding: 5px 10px;
  color: white;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 30px;
}
.title {
  margin-bottom: 10px;
  font-weight: 400;
  color: rgb(68, 68, 68);
  text-transform: capitalize;
  letter-spacing: 1px;
}
.list {
  margin: 20px 0;
  list-style: none;
}
.list li {
  padding: 2px 0;
  text-transform: capitalize;
}
.list li::before {
  content: "\2022";
  color:var(--blue);
  font-weight: bold;
  display: inline-block; 
  width: 1em;
  margin-left: -1em;
}
.desc {
  color: var(--desc);
  font-weight: 400;
  font-size: 15px;
  white-space: pre-line;
  
}
.desc-title {
 color: rgb(71, 71, 71);
  font-weight: bold;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>