<template>
  <PopUp :dialog="dialog" @close="close" :text="text">
    <v-card class="pa-8" color="secondary" light>
      <template v-slot>
        <h1 class="mb-6">{{ text }} post</h1>
        <v-form>
          <v-text-field
            class="mb-3"
            v-if="text === 'edit'"
            :rules="textRules"
            v-model="post.title"
            label="post title"
            required
          ></v-text-field>
          <v-text-field
            class="mb-3"
            v-if="text === 'edit'"
            :rules="textRules"
            v-model="post.body"
            label="post body"
          ></v-text-field>
          <v-btn color="primary" @click="modifyPost">submit</v-btn>
        </v-form></template
      >
    </v-card></PopUp
  >
</template>

<script>
import _ from "lodash";
import PopUp from "../generics/PopUp.vue";
export default {
  name: "PostHandler",
  components: { PopUp },
  props: { dialog: Boolean, text: String, current: Object },
  data() {
    return {
      editor: false,
      post: {},
      textRules: [(v) => !!v || "this field is required"],
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    modifyPost() {
      if (this.text === "edit") {
        this.$store.dispatch("editPost", this.post);
      } else {
        this.$store.dispatch("deletePost", this.post);
      }
      this.close();
    },
  },

  mounted() {
    this.post = _.cloneDeep(this.current);
  },
};
</script>

<style>
</style>