<template>
  <footer>
    <p>syntappz &copy; {{date}}</p>
  </footer>
</template>

<script>
export default {
  computed: {
    date() {
      const d = new Date();
      const date = d.getFullYear();
      return date;
    }
  }
};
</script>

<style scoped>
footer {
  margin-top: 50px;
  padding: 30px 0;
  text-align: center;
  
}

footer p {
  font-weight: 400;
  color: #858585;
  text-transform: capitalize;
}
</style>