<template>
  <v-container align-center fill-height mt-n5>
    <v-data-table
      light
      :headers="headers"
      :items="posts"
      :items-per-page="5"
      :search="search"
      :sort-by="['title', 'body']"
      :sort-desc="[false, true]"
      multi-sort
      class="elevation-1"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="search"
          class="mx-4"
        ></v-text-field> </template></v-data-table
  ></v-container>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      posts: [],
      headers: [
        { text: "body", value: "body" },
        { text: "id", value: "id" },
        { text: "title", value: "title" },
        { text: "userID ", value: "userId" },
      ],
    };
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