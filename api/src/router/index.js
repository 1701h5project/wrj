import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import CreateComponent from '../components/create/create.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		children: [{
			path: '/create',
			name: 'create',
			component: CreateComponent
		}]
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	}]
})

// 对将要进入的路由进行权判断
router.beforeEach((to, from, next) =>{
	// console.log(to);
	// if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
	// 	router.replace('login');
	// 	next();
	// } 
	next();
})

export default router