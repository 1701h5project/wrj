import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/Login'
import create from '../components/create/create'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        create

    }
})