<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <router-link to="/DashBoard"><v-icon>mdi-home </v-icon></router-link>

      <router-link to="/Post" class="ml-4"
        ><v-icon>mdi-message </v-icon></router-link
      >
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-footer padless :fullscreen="$vuetify.breakpoint.mobile">
      <v-spacer></v-spacer>
      <v-card
        flat
        tile
        class="white--text text-center"
        color="none"
        width="4900"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0" full-width>
          closeApp 2022
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>
