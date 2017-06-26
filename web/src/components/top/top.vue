<template>
    <div class="top">
        <div class="k-header">
            <span class="show_main to_main" @click="show = !show" v-model="show"><i class="fa fa-bars" aria-hidden="true"></i></span> 
            <span class="goBack" @click="goBack"><i class="fa fa-reply" aria-hidden="true"></i></span>
			<router-link to="/personal"><span class="to_personal"><i class="fa fa-user" aria-hidden="true"></i></span></router-link>
            <router-link to="/carlist"><span class="to_shopcar"><i class="fa fa-shopping-cart" aria-hidden="true"></i></span></router-link>
            <router-link to="/"><img src="../../assets/imgs/home/logo.png" alt="" class="to_center"></router-link>
        </div>
		<transition name="v">
			<div class="main_l" v-show="!show">
				<div class="main_search">
					<a href="javascript:" @click="toSearch"><i class="fa fa-search" aria-hidden="true"></i></a>
					<input type="text" placeholder="搜索商品..." v-model="name" @click="showSearch">
				</div>
				<div class="searchArea" v-show="this.searchShow">
					<span class="returnElse" @click="returnElse"><i class="fa fa-times" aria-hidden="true"></i></span>
					<ul class="searchResult">
						<li v-for="(item,index) in searchData">
							<router-link :to="{path:'/product/'+item.id}">
								<img :src="'src/assets/imgs/goods/'+item.imgurl[0]" alt="">
								<h3>{{item.name[0]}}</h3>
								<p>￥{{item.price[0]}}</p>
							</router-link>
						</li>
					</ul>
				</div>
				<div class="elseArea" v-show="!this.searchShow">
					<div class="main_nav">商品分类</div>
					<div class="main_List">
						<ul>
							<li>
								<router-link to="/classfiy"><img src="../../assets/imgs/home/main_L1.PNG" alt=""><span>"晓"Spark</span></router-link>   
							</li>
							<li>
								<router-link to="/classfiy"><img src="../../assets/imgs/home/main_L2.PNG" alt=""><span>"御"Mavic</span></router-link>
							</li>
							<li>
								<router-link to="/classfiy"><img src="../../assets/imgs/home/main_L3.PNG" alt=""><span>精灵Phantom</span></router-link>
							</li>
							<li>
								<router-link to="/classfiy"><img src="../../assets/imgs/home/main_L4.PNG" alt=""><span>"悟"inspire</span></router-link>
							</li>
							<li>
								<router-link to="/classfiy"><img src="../../assets/imgs/home/main_L5.PNG" alt=""><span>"如影"Ronin</span></router-link>
							</li>
							<li>
								<router-link to="/classfiy"><img src="../../assets/imgs/home/main_L6.PNG" alt=""><span>增值服务</span></router-link>
							</li>
							<li>
								<router-link to="/classfiy"><p>其他</p></router-link>
							</li>
						</ul>
					</div>
					<div class="main_nav">服务与支持</div>
					<div class="main_support">
						<h2>我们很高兴为您提供帮助</h2>
						<ul>
							<li>
								<i class="fa fa-envelope-o" aria-hidden="true"></i>
								<p>邮箱</p>
							</li>
							<li>
								<i class="fa fa-commenting-o" aria-hidden="true"></i>
								<p>在线交谈</p>
							</li>
							<li>
								<i class="fa fa-phone" aria-hidden="true"></i>
								<p>电话</p>
							</li>
						</ul>
					</div>
					<div class="main_country">
						<span>更改国家和地区</span>
					</div>				
				</div>
			</div>		
		</transition>
		<div class="to_top" @click="toTop" v-if="scroll==true">
			<i class="fa fa-hand-o-up" aria-hidden="true"></i>
		</div>
    </div>
</template>

<script>
    import './top.scss'
    import 'vue-router'
	import $ from 'jquery'
	import erp from '../../assets/common/global.js'
    export default{
        data:function(){
            return {
                show:true,
				searchShow:false,
				scroll:false,
				name:'',
				searchData:''
            }
        },
        mounted(){
			window.addEventListener('scroll', this.handleScroll);
        },
		methods:{
			toSearch:function(){
				$.get(erp.baseUrl + 'showData',{"collection":"goods","name":this.name}).then(response=>{
					this.searchData = response;
					for(var i=0;i<response.length;i++){
						this.id.push(response[i].id)
						this.imgurl.push(response[i].imgurl[0]);
						this.name.push(response[i].name[0]);
						this.price.push(response[i].price[0])
					}
				})
			},
			returnElse:function(){
				this.searchShow = false;
			},
			showSearch:function(){
				this.searchShow = true;
			},
			toTop:function(){
				var time=setInterval(function(){
					//获取滚动条高度
					var osTop=document.documentElement.scrollTop||document.body.scrollTop;
					//每次上升高度
					var ispeed=Math.floor(-osTop/10);
					document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
					if(osTop==0){
						clearInterval(time);
					}
				},30);
			},
			handleScroll(){
				this.scroll = document.body.scrollTop > 100;
			},
			goBack(){
				this.$router.go(-1)
			}
		},
        watch:{
            show:function(){
                this.$parent.showMain(this.show)             
            }
        }
    }
</script>