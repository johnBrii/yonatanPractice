import Vue from "vue";
import Vuex from "vuex";
import exampleModule from "./modules/exampleModule"

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: { exampleModule: exampleModule }
})
console.log([exampleModule]);
console.log({ exampleModule });

export default store;
