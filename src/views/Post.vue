<template>
  <v-data-table>post</v-data-table>
</template>

<script>
export default {
  data() {
    return { posts: [] };
  },
  methods: {
    async getPosts() {
      await this.$store.dispatch("getAll");
      this.posts = this.$store.state.postModule.posts; // is getters better here?
      console.log(this.posts);
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<style>
</style>