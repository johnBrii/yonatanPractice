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
            "auth/login": async (context, payload) => {

                await axios.post('https://claplablmsapi.clap.co.il/auth/login/1',
                    {
                        email: payload.email,
                        password: payload.password
                    }
                ).then((response) => {
                    if (response.status === 200) {
                        alert("got 200")
                        context.commit("auth/login");


                    }
                });
            }
        }
    }
}