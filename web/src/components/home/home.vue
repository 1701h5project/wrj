<template>
	<div class="main">
		<top></top>
		<transition name="v">
			<div class="main_r" v-show="show" >
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><img src="../../assets/imgs/home/banner1.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../../assets/imgs/home/banner2.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../../assets/imgs/home/banner3.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../../assets/imgs/home/banner4.jpg" alt=""></div>
					</div>
					<!-- 如果需要分页器
					<div class="swiper-pagination"></div> -->
					
					<!-- 如果需要导航按钮 
					<div class="swiper-button-prev"></div>
					<div class="swiper-button-next"></div>-->
					
					<!-- 如果需要滚动条 -->
					<div class="swiper-scrollbar"></div>
				</div>

				<div class="flyStyle">
					<ul>
						<li><router-link to="/list">
							<img src="../../assets/imgs/home/leftPic.jpg" alt="">
							<p>“悟” INSPIRE 2</p>
						</router-link></li>
						<li><router-link to="/list">
							<img src="../../assets/imgs/home/rightPic.jpg" alt="">
							<p>Phantom 4 Pro</p>
						</router-link></li>
					</ul>
				</div>

				<div class="fly_1" v-for="(item, index1) in numStyle">
					<h3>{{style[index1]}} <router-link to="/list"><span>更多</span></router-link></h3>
					<ul>
						<li v-for="(item, index2) in data">
							<router-link :to="{path:'/product/'+item.id}">
								<div><img :src="'src/assets/imgs/goods/'+item.imgurl[0]" alt=""></div>
								<h3>{{item.name[0]}}</h3>
								<p>￥ <span>{{item.price[0]}}</span></p>
								<p><span></span></p>
							</router-link>
						</li>
					</ul>
				</div>
			</div>		
		</transition>
		<div class="footer">
			<p><a href="">Flying.com</a><a href="">隐私政策</a><a href="">使用条款</a></p>
			<p>版权所有© 2017 Flying创新保留所有权利</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './home.scss'
	import erp from '../../assets/common/global.js'
	import $ from 'jquery'
	import Vue from 'vue'
	import top from '../top/top.vue'
	import Swiper from '../../assets/swiper/swiper-3.4.2.min.js'

	export default {
		components: {
			top,
			Swiper
		},
		data:function(){
			return{
				show:true,
				data:'',
				numStyle:5,
				style:["'晓'SPARK","'御'MAVIC","PHANTOM","INSPIRE","'灵眸'OSMO",]
			}
		},
		methods: {
			showMain(arg){
				this.show = arg;
			},
		},
		created(){
			$.get(erp.baseUrl + 'showData',{"collection":"goods"}).then(response=>{
				this.data = response;
				for(var i=0;i<response.length;i++){
					this.id.push(response[i].id)
					this.imgurl.push(response[i].imgurl[0]);
					this.name.push(response[i].name[0]);
					this.price.push(response[i].price[0])
				}
			})
		},
		mounted(){
			let mySwiper = new Swiper ('.swiper-container', {
				direction: 'horizontal',
				loop: true,
				
				// 如果需要分页器
				// pagination: '.swiper-pagination',
				
				// // 如果需要前进后退按钮
				// nextButton: '.swiper-button-next',
				// prevButton: '.swiper-button-prev',
				
				// 如果需要滚动条
				scrollbar: '.swiper-scrollbar',
				autoplay: '3000'

			})
		}
	}
</script>