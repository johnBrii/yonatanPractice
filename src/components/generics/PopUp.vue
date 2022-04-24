<template>
  <v-dialog max-width="600px" :value="dialog" @click:outside="close">
    <v-card>
      <v-card-title>{{ text }}</v-card-title>

      <v-slot name="content"></v-slot>
      <v-text-field @keyup="userInput"></v-text-field>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "PopUp",
  props: { dialog: Boolean, text: String },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>