<template>
	<div id="product-store">
		<matexia></matexia>
	 	<div id="product-normal" v-show="qwe" v-for="(value, key) in dataset">
		 	<div class="product-info">
			 	<div class="product-slider">
				 	<div class="product-base">
					 	<div class="product-dots">
						 	<div class="product-list">
							 	<div class="product-slide">
									<div class="swiper-container">
										<div class="swiper-wrapper" v-for="obj in dataset">
											<div class="swiper-slide" v-for="(asdf, key) in obj.imgurl">
												<img :src="'src/assets/imgs/goods/'+asdf" style="display: block;max-width: 100%;margin: 0 auto;overflow:hidden;">
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="product-pirce">
					<div class="product-overview">
						<div class="product-item">
							<div>
								<div class="product-name product-iop3"  v-show="!isShow">{{value.name[0]}}</div>
								<div class="product-name product-iop4" v-show="isShow" >{{value.name[1]}}</div>
							</div>
						</div>
						<div class="product-item">
							<div>
								<p>
									<span>￥</span>
									<span  v-show="!isShow" class="product-iop1">{{value.price[0]}}</span>
									<span  v-show="isShow" class="product-iop2">{{value.price[1]}}</span>
								</p>
								<p>
									<i class="iconfont icon-feiji"></i>
									<span class="product-shipping">包邮</span>
									<i class="iconfont icon-zhifu" style="font-size:16px;"></i>
									<span class="product-shipping">分期支付</span>
								</p>
								<p>
									<a href="#">分期最低月付¥479.12起 详情 ></a>
								</p>
							</div>
						</div>
						<div class="product-item">
							<div>发货时间：订单付款后1-3个工作日。</div>
						</div>
					</div>
				</div>
				<div class="product-variant">
					<div class="product-attr">
						<p class="product-attr-name">版本</p>
						<ul class="product-inline">
							<li>
								<div>
									<input type="radio" class="activeqwe1"  name="myradio" v-on:click="toggle()"></input>
									<span>{{value.name[1]}}</span>
								</div>
							</li>
							<li>
								<div>
									<input type="radio" class="activeqwe2"  name="myradio" checked  v-on:click="toggle()"></input>
									<span>{{value.name[0]}}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="product-series">
				<h3><span>配件推荐</span></h3>
				<div class="product-item-block">
					<div class="product-scroll">
						<ul>
							<li>
								<a href="javascript:;">
									<div class="product-medio"><img src="../../assets/imgs/goods/imgurl-1498267120592.jpg" alt=""></div>
									<h3 class="product-h3">闪迪 microSD卡 64GB</h3>
									<p>
										<span>￥</span><span>219.00</span>
									</p>
								</a>
								<button>添加</button>
							</li>
							<li>
								<a href="javascript:;">
									<div class="product-medio"><img src="../../assets/imgs/goods/imgurl-1498267120589.jpg" alt=""></div>
									<h3 class="product-h3">闪迪 microSD卡 64GB</h3>
									<p>
										<span>￥</span><span>219.00</span>
									</p>
								</a>
								<button>添加</button>
							</li>
							<li>
								<a href="javascript:;">
									<div class="product-medio"><img src="../../assets/imgs/goods/imgurl-1498267120584.jpg" alt=""></div>
									<h3 class="product-h3">闪迪 microSD卡 64GB</h3>
									<p>
										<span>￥</span><span>219.00</span>
									</p>
								</a>
								<button>添加</button>
							</li>
							<li>
								<a href="javascript:;">
									<div class="product-medio"><img src="../../assets/imgs/goods/imgurl-1498274249038.jpg" alt=""></div>
									<h3 class="product-h3">闪迪 microSD卡 64GB</h3>
									<p>
										<span>￥</span><span>219.00</span>
									</p>
								</a>
								<button>添加</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="product-detail">
				<div class="product-tabber">
					<div class="product-yw" @click='flag  =  1'>产品特色</div>
					<div class="product-yw" @click='flag  =  2'>常见问题</div>
					<div class="product-bar" v-if="flag == 1" key = "1"></div>
					<div class="product-bar1" v-else key = "2"></div>
				</div>
				<section class="product-content">
					<transition name="aa" mode="out-in">
						<div class="product-content-item" v-if="flag == 1" key = "a">
							<div class="product-tips">{{value.characteristic[0]}}</div>
							<article>
								<ul v-for="obj in dataset">
									<li  v-for="(zxcv, key) in obj.characteristic">{{zxcv}}</li>
									
								</ul>
								<p class="product-aaa">[1]电池使用时间在最佳飞况下测得，或因环境和飞行方式不同而有所差异。</p>
								<p class="product-bbb">本产品由flying科技有限公司提供</p>
							</article>
						</div>
						<div class="product-content-item-b" v-else key = "b" :style="height">
							<article>
								<h2>产品</h2>
								<h4>{{value.problem[0]}}</h4>
								<p>{{value.answer[0]}}</p>
								<h2>相机</h2>
								<h4>{{value.problem[1]}}</h4>
								<p>{{value.answer[1]}}</p>
								<h4>{{value.problem[2]}}</h4>
								<p>{{value.answer[2]}}</p>
								<h4>{{value.problem[3]}}</h4>
								<p>{{value.answer[3]}}</p>
								<h4>{{value.problem[4]}}</h4>
								<p>{{value.answer[4]}}</p>
							</article>
							<span class="product-detail" :style="transform"  @click="chara1">
								<i :class="chara" style="fontSize:30px;"></i>
							</span>
						</div>
					</transition>
				</section>
				<div class="product-btns">
					 <router-link to="/list">浏览全部商品</router-link>
				</div>
			</div>
			<div class="product-help">
				<h2>我们很高兴为您提供帮助</h2>
				<ul class="product-help-list">
					<li class="product-email">
						<a href="javascript:">邮箱</a>
					</li>
					<li class="product-jiaotan">
						<a href="javascript:">在线交谈</a>
					</li>
					<li class="product-dianhua">
						<a href="javascript:">电话</a>
					</li>
				</ul>
			</div>
			<div class="product-btn-cart">
				<button @click='show = !show'>加入购物车</button>
				<transition name="info">
					<div v-if="show" class="product-confirm">
						<section class="product-select-modal">
							<div class="product-select-title">
								<span class="product-shiliang" @click='show = !show'></span>
								<span class="product-fly">flying</span>
							</div>
							<section class="product-body">
								<div class="product-reactid">
									<div class="product-features">
										<p class="product-new">一年两次换新</p>
										<p class="product-shui">无惧进水</p>
										<p class="product-baoyou">双向包邮</p>
									</div>
									<p class="product-care">DJI Care换新计划全新升级，提供一年两次极速换新，节省冗余中间环节，在上门取件的第一时间立刻为您发出置换产品，进行空中交换；同时无惧进水，产品进水后也可享受保障，助您安心飞行。</p>
									<div class="product-list">
										<div class="product-item">一年两次极速换新服务，无惧进水，每次只需支付一定的服务费，即可最大限度的节省您的维修时间。现购买即可赠送一份第三者责任险。</div>
									</div>
								</div>
							</section>
							<div class="product-footer">
								<button  @click="chara2">确定</button>
							</div>
						</section>
					</div>
				</transition>
				
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	// window.onload = function() {
	// 	let mySwiper = new Swiper ('.swiper-container', {
	// 		loop: true,
	// 		autoplay:'3000'
	// 	})     
	// }

	import top from '../top/top.vue'
	import './product.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import erp from '../../assets/common/global.js'
	export default{
		components:{
			matexia:top
		},
		data(){
			return{
				chara:"fa fa-angle-down",
				show:false,
				flag:1,
				height:{height:"300px"},
				transform:null,
				qwe:true,
				dataset: [],
				isShow:false,
				name:'',
				pirce:'',
				num:1,
				usephone:'',
				imgurl:''
			}
		},
		methods: {
			showMain(arg){
				this.qwe = arg;
			},
			chara1:function(){
				if(this.height.height == "300px"){
					this.height.height = "auto"
					this.chara="fa fa-angle-up"
				}else{
					this.height.height = "300px"
					this.chara="fa fa-angle-down"
				}
			},
			toggle:function(){
				this.isShow = !this.isShow;
			},
			chara2:function(){
				// console.log(this.imgurl)
				this.userphone = window.localStorage.getItem('userphone')
				if(this.userphone != null){
					if($('.product-iop1').css('display') == 'none'){
						this.name = $('.product-iop4').text()
						this.pirce = $('.product-iop2').text()
						
						// console.log(this.name)
						// console.log(this.pirce)
						
					}else{
						this.name = $('.product-iop3').text()
						this.pirce = $('.product-iop1').text()
						
					}
					$.post(erp.baseUrl + 'showAdd',{'userphone':this.userphone,'name':this.name,'price':this.pirce,'qty':1,'imgurl':this.imgurl,'checked':true},function(){

					}.bind(this))
					this.$router.push({path: '/carlist'});
				}else{
					this.$router.push({path: '/login'});
				}
			}
		},
		created: function(){
			this.id = this.$route.params.id
			$.get(erp.baseUrl + 'showData',{'collection':'goods','id':this.id}, function(response){
				this.dataset = response;
				this.imgurl = this.dataset[0].imgurl[0]
				console.log(this.imgurl)
			}.bind(this))	
		},
		updated:function(){
			let mySwiper = new Swiper ('.swiper-container', {
				loop: true,
				autoplay:'3000'
			})        
		}
	}
	
</script>