import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'
import $ from 'jquery'

const state = {
}

const mutations = {
	login: (data, formData) => {
		http.post('erplogin', formData)
		.then(response => {
			if(response.status){
				$.alert(response.message)
				window.sessionStorage.setItem('supername',response.data)
				router.push({name: 'home'})
			}else{
				$.alert(response.message+'请联系后台开发人员!')
			}
		})
	}
}

const actions = {
	login: (events, formData) => {
		events.commit('login', formData)
	}
}

export default {
	state,
	mutations,
	actions
}