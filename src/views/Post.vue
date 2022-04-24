<template>
  <v-container align-center fill-height mt-n5>
    <v-spacer></v-spacer>
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
        ></v-text-field>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div class="d-flex">
          <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
          <v-icon @click="editItem(item)">mdi-pencil</v-icon>
        </div>
      </template></v-data-table
    >
    <v-spacer></v-spacer>
    <popUp v-if="edit" :dialog="edit" :text="'edit'" @close="edit = false" />
  </v-container>
</template>

<script>
import PopUp from "../components/generics/PopUp.vue";
export default {
  components: { PopUp },
  data() {
    return {
      search: "",
      edit: false,
      posts: [],
      headers: [
        { text: "body", value: "body" },
        { text: "id", value: "id" },
        { text: "title", value: "title" },
        { text: "userID ", value: "userId" },
        { text: "actions ", value: "actions" },
      ],
    };
  },
  methods: {
    async getPosts() {
      await this.$store.dispatch("getAll");
      this.posts = this.$store.state.postModule.posts; // is getters better here?
      console.log(this.posts);
    },
    editItem() {
      this.edit = true;
    },
  },

  created() {
    this.getPosts();
  },
};
</script>

<style>
</style>