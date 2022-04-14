<template>
  <v-layout align-center justify-center fill-height mt-n5>
    <h1>dashboard</h1></v-layout
  >
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("axiosInstanceTokenTest");
  },
};
</script>

<style>
</style>