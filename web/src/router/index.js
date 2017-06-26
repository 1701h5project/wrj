import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import LoginComponent from '../components/login/login.vue'
import RegisterComponent from '../components/register/register.vue'
import ProductComponent from '../components/product/product.vue'
import PersonalComponent from '../components/personal/personal.vue'
import TopComponent from '../components/top/top.vue'
import HomeComponent from '../components/home/home.vue'
import ClassfiyComponent from '../components/classfiy/classfiy.vue'
import industrial from '../components/classfiy/industrial/industrial.vue'
import inspire from '../components/classfiy/inspire/inspire.vue'
import mavic from '../components/classfiy/mavic/mavic.vue'
import spark from '../components/classfiy/spark/spark.vue'
import phoantomc from '../components/classfiy/phoantomc/phoantomc.vue'
import osmo from '../components/classfiy/osmo/osmo.vue'
import ronin from '../components/classfiy/ronin/ronin.vue'
import service from '../components/classfiy/service/service.vue'
import other from '../components/classfiy/other/other.vue'
import ListComponent from '../components/list/list.vue'
import carlist from '../components/carlist/carlist.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/personal',
		name: 'personal',
		component: PersonalComponent
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path:'/product/:id',
		name:'product',
		component:ProductComponent
	},
	{
		path: '/',
		name: 'home',
		component: HomeComponent
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path: '/register',
		name: 'register',
		component: RegisterComponent
	},{
		path:'/classfiy',
		name:'classfiy',
		component: ClassfiyComponent,
		children:[
			{path: 'spark',component:spark},
			{path: 'mavic',component:mavic},
			{path: 'phoantomc',component:phoantomc},
			{path: 'inspire',component:inspire},
			{path: 'osmo',component:osmo},
			{path: 'ronin',component:ronin},
			{path: 'industrial',component:industrial},
			{path: 'service',component:service},
			{path: 'other',component:other}
		]
	},{
		path:'/list',
		name:'list',
		component:ListComponent
	},{
		path:'/carlist',
		name:'carlist',
		component:carlist
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