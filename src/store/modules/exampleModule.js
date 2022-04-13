import axios from "axios";

export default {

    state: {
        isLoggedIn: false,
        errorMsg: "login failed",
        axiosInstance: null,
        tokenAuth: false

    },
    mutations: {
        "login": (state) => {
            state.isLoggedIn = true
        },
        "Token/login": (state) => {
            state.tokenAuth = true
        }

    },
    getters: {

        hasToken(state) { return state.tokenAuth }

    },
    actions: {
        login: async (context, payload) => {

            await axios.post('https://claplablmsapi.clap.co.il/auth/login/1',
                {
                    email: payload.email,
                    password: payload.password
                }
            ).then((response) => {
                console.log(response.data.token)
                if (response.status === 200) {
                    localStorage.setItem('access_token', response.data.token)
                    context.commit("login");
                    context.commit("Token/login");
                }
            });
        },
        "Token/login": async (context) => {
            await axios
                .get("https://claplablmsapi.clap.co.il/auth/checkLogin", {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        context.commit("Token/login");
                    }
                });
        }
    }
}