import Vue from 'vue'
import router from 'vue-router'
import DashBoard from '../views/DashBoard.vue'
import Login from "../views/Login.vue"
import store from '../store/index'

Vue.use(router)

const VueRouter = new router({
    mode: 'history',
    routes: [

        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/DashBoard',
            name: 'DashBoard',
            component: DashBoard
        },

    ]
})

VueRouter.beforeEach(async (to, from, next) => {
    if (to.path !== '/') {
        try {
            await store.dispatch("Token/login");
            console.log(from);// how to access next without mentioning from?
            if (store.getters.hasToken) {
                next()

            }
        } catch (error) {
            VueRouter.push({ path: '/' })
        }
    }
    else {
        next()
    }
})

export default VueRouter