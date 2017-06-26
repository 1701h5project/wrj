import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'

const state = {

}

const mutations = {
	created: (data,collection) => {
        http.get('/showData',collection)
        .then(response => {
            console.log("home.js")
        })
	}
}

const actions = {
	created: (events) => {
		events.commit('home')
	}
}

export default {
	state,
	mutations,
	actions
}