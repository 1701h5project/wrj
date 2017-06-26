import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/Login'
import register from '../components/register/register'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        register
    }
})