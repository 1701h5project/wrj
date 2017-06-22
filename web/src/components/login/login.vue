<template>
	<div class="login">
		<div class="top">
			<span class="fa fa-angle-left goBack">
			</span>
			<div class="title">登录</div>
		</div>
		<form class="main">
			<div class="section">
				<span class="fa fa-mobile"></span>
				<input type="text" v-model="phone" placeholder="请输入手机号码" required>
			</div>
			<div class="section">
				<span class="fa fa-lock lock"></span>
				<input type="password" v-model="pwd" placeholder="请输入密码" required>
			</div>
			<button class="btn btn-info" @click="login">登录</button>
			<p>忘记密码?</p>
			<div class="create">尚未注册帐号?<router-link to="/register">创建帐号</router-link></div>
		</form>
	</div>
</template>

<script type="text/javascript">
	import './Login.scss'
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
			login: function(event){
				if(!/^1[34578]\d{9}$/.test(this.phone)){
					$.alert('请填写正确的手机号码');
				}else{
					if(this.phone && this.pwd){
						this.$store.dispatch('login', {userphone: this.phone, password: this.pwd})
					}
				}

			}
			// ...mapActions(['login'])
		}
	}
</script>