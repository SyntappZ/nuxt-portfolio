<template>
  <div class="section-title">
    <h4>{{ label }}</h4>
    <br />

    <h1 class="size-50">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: ["title", "label"]
};
</script>

<style scoped>
</style>