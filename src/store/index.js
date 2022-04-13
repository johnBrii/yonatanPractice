import Vue from "vue";
import Vuex from "vuex";
import exampleModule from "./modules/exampleModule"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: { exampleModule }
})


export default store;
