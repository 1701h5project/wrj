<template>
	<div class="register">
		<div class="top">
			<span class="fa fa-angle-left goBack" @click='goLogin'>
			</span>
			<div class="title">注册</div>
		</div>
		<form class="main">
			<div class="section">
				<span class="fa fa-mobile"></span>
				<input type="text" v-model="phone" placeholder="请输入注册手机号码" required>
			</div>
			<div class="section">
				<span class="fa fa-lock lock"></span>
				<input type="password" v-model="pwd" placeholder="请输入注册密码" required>
			</div>
			<button class="btn btn-info" @click="register">注册</button>
			<p>请先阅读<router-link to="#">使用条款</router-link></p>
			<div class="create">已有帐号?<router-link to="/login">登录帐号</router-link></div>
		</form>
	</div>
</template>

<script type="text/javascript">
	import './register.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'

	export default {
		data: function(){
			return {
				phone: '',
				pwd: ''
			}
		},
		methods: {
			register: function(event){
				if(!/^1[34578]\d{9}$/.test(this.phone)){
					$.alert('请填写正确的手机号码');
				}else{
					if(this.phone && this.pwd){
						this.$store.dispatch('register', {userphone: this.phone, password: this.pwd})
					}
				}
			},
			goLogin:function(){
				window.history.back(-1)
			}
			// ...mapActions(['login'])
		}
	}
</script>