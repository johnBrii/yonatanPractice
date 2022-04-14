import axios from "axios"

export default {

    state: {
        posts: []

    },
    mutations: {
        allPosts(state, data) { state.posts = [...data] }
    },
    getters: {

    },
    actions: {
        getAll: async (context) => {

            let data = await axios.get('https://jsonplaceholder.typicode.com/posts')
            context.commit("allPosts", data.data);


        },


    },
}