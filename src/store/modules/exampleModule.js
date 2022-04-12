import axios from "axios";

export default {

    state: {
        isLoggedIn: false,
        errorMsg: "login failed"
    },

    mutations: {
        "auth/login": (state) => {
            state.isLoggedIn = true
        },

        getters: {

        },

        actions: {
            "auth/login": async (context) => {

                await axios.post('https://claplablmsapi.clap.co.il/auth/login/1',
                    {
                        email: "admin@gmail.com",
                        password: 321123
                    }
                ).then((response) => {
                    alert("got response")
                    if (response.status === 200) {
                        context.commit("auth/login");


                    }
                });
            }
        }
    }













}