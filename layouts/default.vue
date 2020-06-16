<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>



<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>





<style>
@import "https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Playfair+Display:400,400i,700,700i,900,900i";
body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
 
  line-height: 24px;
  color: #333;
}

:root {
  --blue: #425bb5;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.container {
  width: 55%;
  margin: 0 auto;
}



.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}


.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
