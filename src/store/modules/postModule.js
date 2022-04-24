import axios from "axios"

export default {

    state: {
        posts: []
    },
    mutations: {
        allPosts(state, data) { state.posts = [...data] }
    },
    getters: {
        posts: (state) => state.posts
    },
    actions: {
        getAll: async (context) => {

            let data = await axios.get('https://jsonplaceholder.typicode.com/posts')
            context.commit("allPosts", data.data);
        },
        deletePost: () => { axios.delete('https://jsonplaceholder.typicode.com/posts/1') },


        editPost: (context, payload) => {
            axios.put('https://jsonplaceholder.typicode.com/posts/1', { ...payload }, {
                headers: {
                    'Content-type': 'application/json;charset=UTF-8'
                }
            }
            )
        }
    },
}