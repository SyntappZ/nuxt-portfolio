<template>
  <div>
    <nuxt />
  </div>
</template>



<script>
export default {};
</script>





<style>
@import "https://fonts.googleapis.com/css?family=Rouge+Script|Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Playfair+Display:400,400i,700,700i,900,900i";
body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
  line-height: 24px;
  color: #333;
}

:root {
  --blue: #425bb5;
  --linearMix: linear-gradient(45deg, var(--blue), #fa98a9);
  --grey: #f3f3f3;
  --desc: #5a5a5a;
}

.container {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 30px;
}

.size-50 {
  font-size: 50px;
  line-height: 50px;
}

.h-50 {
  height: 50px;
}
.h-20 {
  height: 20px;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
  margin: 0;
}

h1 {
  font-family: "Playfair Display", serif;
  font-size: 70px;
  line-height: 70px;
  font-weight: 200;
  text-transform: capitalize;
}

h4 {
  font-family: "Lato", sans-serif;
  text-transform: capitalize;
  letter-spacing: 2px;
  position: relative;
  color: var(--blue);
  margin-left: 40px;
  font-weight: 900;
  font-size: 17px;
}

h4:before {
  position: absolute;
  width: 30px;
  left: -40px;
  content: "";
  display: block;
  height: 2px;
  background: var(--blue);
  top: 12px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.desc {
  color: var(--desc);
  font-weight: 300;
}
</style>
