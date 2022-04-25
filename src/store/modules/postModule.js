import axios from "axios"

export default {
    state: {
        posts: []
    },
    mutations: {
        index(state, data) { state.posts = [...data] },
        "post/destroy"(state, payload) { state.posts = state.posts.filter((v) => { return v.id !== payload.id }) },
        "post/update"(state, payload) {
            state.posts = state.posts.map((v) => {
                if (v.id === payload.id) {
                    return payload;
                }
                else {
                    return v;
                }
            });
        }
    },
    getters: {
        posts: (state) => state.posts
    },
    actions: {
        index: async (context) => {
            try {
                let data = await axios.get('https://jsonplaceholder.typicode.com/posts')
                context.commit("index", data.data);
            } catch (error) {
                alert(error.message)
            }
        },
        "post/destroy": async (context, payload) => {
            try {
                await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
                context.commit("post/destroy", payload)
            } catch (error) {
                alert(error.message)
            }
        },
        "post/update": async (context, payload) => {
            try {
                await axios.put('https://jsonplaceholder.typicode.com/posts/1', { ...payload }, {
                    headers: {
                        'Content-type': 'application/json;charset=UTF-8'
                    }
                }
                )
                context.commit("post/update", payload)
            } catch (error) {
                alert(error.message)
            }
        }
    },
}