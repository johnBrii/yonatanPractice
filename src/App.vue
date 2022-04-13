<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/DashBoard"><v-icon>mdi-home </v-icon></router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "./router/index";

export default {
  name: "App",

  data: () => ({
    router,
  }),
};
</script>
