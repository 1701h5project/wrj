<template>
	<div class="classfiy-box">
		<zh-header></zh-header>
		<div class="main" v-show="zhmu">
			<div class="left-nav" >
				<ul class="nav">
					<li @click="border" class="list"><router-link to="/classfiy/spark">“晓”Spark系列</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/mavic">“御”Mavic系列</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/phoantomc">精灵Phantom系列</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/inspire">"悟"Inspire系列</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/osmo">灵眸Osmo系列</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/ronin">“如影”Ronin</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/industrial">行业应用</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/service">增值服务</router-link></li>
					<li @click="border" class="list"><router-link to="/classfiy/other">其他</router-link></li>
				</ul>
			</div>
			<div class="right-main">
				<router-view></router-view>
			</div>
		</div>
		<footer></footer>
	</div>
</template>

<script type="text/javascript">
	import './classfiy.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import header from '../top/top.vue'

	export default {
		components: {
			'zh-header': header,
			//'zh-footer': footer,
		},
		data: function(){
			return {
				zhmu:true,
				color:'',
				arr:0
			}
		},
		methods: {
			border:function(){
			
				$('.nav').on('click','li',function(){
					$(this).attr('class','active').siblings().removeAttr('class');
					$(this).css({'border-left':'3px solid #44abf2'}).siblings().css({'border-left':'none'});
				})
			},
			showMain(arg){
				 this.zhmu = arg;
			}
		}
	}
</script>