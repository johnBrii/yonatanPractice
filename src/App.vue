<template>
  <v-app>
    <v-app-bar app color="primary" dark
      ><v-icon @click="router.push('/DashBoard').catch(() => {})"
        >mdi-home</v-icon
      >
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import Login from "./views/Login.vue";
import router from "./router/index";

export default {
  name: "App",

  data: () => ({
    router,
  }),
};
</script>
