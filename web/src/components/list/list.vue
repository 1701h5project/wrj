<template>
	<div class="list-box">		
		<zh-header></zh-header>		
		<div class="main" v-show="zhmu">
			<div class="sort">
				<span>总合排序</span>
				<span class="goods_sale" @click="sale">销售<i class="sale"><img src="src/assets/imgs/zh-luo/sort.png"></i></span>
				<span class="price_sort" @click="sort">价格<i class="img"><img src="src/assets/imgs/zh-luo/sort.png"></i></span>
				<span>筛选</span>
			</div>
			<ul class="nav">
				<div v-if="data == ''" class="soso">没有找到要搜搜的目标</div>
				<li v-for="(item,index) in data" :data-index="index">
					<router-link :to="{path:'/product/'+ item.id}">
						<img :src="'src/assets/imgs/goods/' + item.imgurl[0]">
						<p class="produce">{{item.name[0]}}</p>
						<p class="goodssale">{{"销量："+item.goodsSale}}</p>
						<p class="price"><span>￥</span><span>{{item.price[0]}}</span></p>
					</router-link> 
				</li>	
			</ul>
		</div>

		<footer></footer>
	</div>
</template>

<script type="text/javascript">
    import './list.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import erp from '../../assets/common/global'
	import header from '../top/top.vue'

	export default {
		components: {
			'zh-header': header,
			//'zh-footer': footer,
		},
		data: function(){
			return {
				zhmu:true,
				data:[],
				check:0,
				sales:0,
				num:6,
				page:1,
				scrollheight:0,
			}
		},
		mounted(){
			var self = this;
			// 设置一个开关来避免重负请求数据 
			var ajax = true;
			//console.log (this.$route.params)
			var data = window.location.href;
			var search = data.substring(data.indexOf('?')+1);
			var newarr = search.split('=');
			var soso = decodeURI(newarr[1]);
			//console.log(soso)
			$.post(erp.baseUrl+'getgoods', {'collection':'goods','num':self.num,'page':self.page})
				.then(function(res){
					//console.log(res.data)
					var arr1=[];
					var arr2=[];
					var maxwidth = 35;
					res.data.forEach(function(item){
						if(item.name[0].indexOf(soso) > -1){
							arr2.push(item)
						}
						if(item.name[0].length>maxwidth){
							var name = item.name[0].substring(0,maxwidth)+"...";
							item.name[0] = name
						}else{item.name[0]}
						arr1.push(item)
					})
					if(soso == 'undefined' ){self.data = arr1}
					else{self.data = arr2}
					//console.log(self.data) 
				})
				.catch(function(error){  
						console.log(error);  
				});	
			
			window.addEventListener('scroll',function(){
				//console.log(document.body.scrollTop + 540 )
				//console.log(document.body.offsetHeight + self.scrollheight)
                //判断是否滚动到底部 window.innerHeight
                if(document.body.scrollTop + 540 >= document.body.offsetHeight + self.scrollheight){  
                    //console.log(ajax);  
                    // 如果开关打开则加载数据  
                    if(ajax==true){  
                        // 将开关关闭  
                        ajax = false; 
						self.page += 1; 
						//self.num += 5;
						self.scrollheight += 500;
                        $.post(erp.baseUrl+'getgoods', {'collection':'goods','num':self.num,'page':self.page})
							.then(function(res){ 
								 //console.log(self.data)
								//console.log(res)
								var arr1=[];
								var arr2=[];
								var maxwidth = 35;
								res.data.forEach(function(item){
									if(item.name[0].indexOf(soso) > -1){
										arr2.push(item)
									}
									if(item.name[0].length>maxwidth){
										var name = item.name[0].substring(0,maxwidth)+"...";
										item.name[0] = name
									}else{item.name[0]}
									arr1.push(item)
								})
								if(soso == 'undefined' ){self.data = self.data.concat(arr1)}
								else{self.data = self.data.concat(arr2)}
								// 数据更新完毕，将开关打开  
								ajax = true;  
							})  
							.catch(function(error){  
								console.log(error);  
							});     
                    }  
                }  
			});
		},  
		methods: {
			sort(e){
				var elements = this.data;
				for(var i=0;i<elements.length-1;i++){
					for(var j=0;j<elements.length-i-1;j++){
						if(Number(elements[j].price[0])>Number(elements[j+1].price[0])){
							var swap=elements[j];
							elements[j]=elements[j+1];
							elements[j+1]=swap;
						}
					}
				}
				this.data = '';
				if(this.check == 0){
					this.data = elements;this.check = 1;
					$('.img').css({'transform' :'rotate(0deg)'})
				}else{this.data = elements.reverse();this.check = 0;
					$('.img').css({'transform' :'rotate(180deg)'})
				}	
			},
			sale(e){
				var elements = this.data;
				for(var i=0;i<elements.length-1;i++){
					for(var j=0;j<elements.length-i-1;j++){
						if(Number(elements[j].goodsSale)>Number(elements[j+1].goodsSale)){
							var swap=elements[j];
							elements[j]=elements[j+1];
							elements[j+1]=swap;
						}
					}
				}
				this.data = '';
				if(this.sales == 0){
					this.data = elements;this.sales = 1;
					$('.sale').css({'transform' :'rotate(0deg)'})
				}else{this.data = elements.reverse();this.sales = 0;
					$('.sale').css({'transform' :'rotate(180deg)'})
				}	
			},
			showMain(arg){
				 this.zhmu = arg;
			},
		}
	}
</script>