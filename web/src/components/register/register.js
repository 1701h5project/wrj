import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'
import $ from 'jquery'

const state = {
}

const mutations = {
	register: (data, formData) => {
		// if(formData.username == 'dk' && formData.password == 'dk'){
		// 	router.push({name: 'home'})
		// } else {
		// 	formData.grant_type = 'password'
		// 	http.post('login/index', formData)
		// 	.then(response => {
		// 		router.push({name: 'home'})
		// 	})
		// }
		http.post('register', formData)
		.then(response => {
			if(response.status){
				$.alert(response.message)
				console.log('success')
				router.push({name: 'login'})
			}else{
				$.alert(response.message)
			}
		})
	}
}

const actions = {
	register: (events, formData) => {
		events.commit('register', formData)
	}
}

export default {
	state,
	mutations,
	actions
}