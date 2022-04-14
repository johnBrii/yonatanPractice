  <template>
  <v-layout align-center fill-height mt-n5>
    <v-row>
      <v-spacer></v-spacer>

      <v-col md="6" lg="6" xl="4" sm="7" xs="12">
        <v-card
          color="transparent"
          justify-center
          align-center
          fill-height
          mt-n5
        >
          <div color="none">
            <v-card class="elevation-16 ma-auto" height="300">
              <v-card-title class="text-h5 justify-center">
                Rate closeApp
              </v-card-title>
              <v-card-text class="text-center">
                If you enjoy working at closeApp, please take a few seconds to
                rate your experience. It really helps!

                <div class="text-center mt-12">
                  <v-rating
                    v-model="rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover
                    large
                  ></v-rating>
                </div>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions class="justify-space-between">
                <v-btn text> No Thanks </v-btn>
                <v-btn color="primary" text> Rate Now </v-btn>
              </v-card-actions>
            </v-card>
            <br />
            <br />
            <br />
            <br />
            <div class="text-center mt-12">
              <v-btn dark color="red darken-2 mb-12" @click="snackbar = true">
                Open Snackbar
              </v-btn>

              <v-snackbar v-model="snackbar" :multi-line="multiLine">
                {{ text }}

                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="red"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    Close
                  </v-btn>
                </template>
              </v-snackbar>
            </div>
          </div>
        </v-card> </v-col
      ><v-spacer></v-spacer
    ></v-row>
  </v-layout>
</template>

<script>
export default {
  mounted() {
    if (this.snackbar) {
      this.$store.dispatch("axiosInstanceTokenTest");
    }
  },
  data() {
    return {
      multiLine: true,
      snackbar: false,
      text: `I'm a multi-line snackbar.`,
    };
  },
};
</script>

