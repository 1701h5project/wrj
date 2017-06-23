<template>
	<div class="home">
		<zh-create v-show="showcreate"></zh-create>
		<zh-modify v-show="showmodify"></zh-modify>
		<header>
	    <h1><img src="./images/admin_logo.png"/></h1>
	    <ul class="rt_nav">
	      <li><a href="#" target="_blank" class="website_icon">站点首页</a></li>
	      <li><a href="#" class="clear_icon">清除缓存</a></li>
	      <li><a href="#" class="admin_icon">DeathGhost</a></li>
	      <li><a href="#" class="set_icon">账号设置</a></li>
	      <li><a href="#" class="quit_icon">安全退出</a></li>
	    </ul>
	  </header>
	  <aside class="lt_aside_nav">
	    <h2><a href="index.html">起始页</a></h2>
	    <ul>
	      <li>
	        <dl>
	          <dt>商品信息</dt>
	          <dd><a href="#" class="active">商品列表</a></dd>
	          <dd><a href="#">商品详情</a></dd>
	          <dd><a href="#">商品回收站</a></dd>
	        </dl>
	      </li>
	      <li>
	        <dl>
	          <dt>订单信息</dt>
	          <dd><a href="#">订单列表</a></dd>
	          <dd><a href="#">订单详情</a></dd>
	        </dl>
	      </li>
	      <li>
	        <dl>
	          <dt>会员管理</dt>
	          <dd><a href="#">会员列表</a></dd>
	          <dd><a href="#">添加会员</a></dd>
	          <dd><a href="#">会员等级</a></dd>
	          <dd><a href="#">会员资金管理</a></dd>
	        </dl>
	      </li>
	    </ul>
	  </aside>
	  <div id="right-content">
	    <div id="right-content-search">
			<div class="section">
				<label>商品名称</label>
				<input type="text" v-model="goodsname" class="form-control input1" />
			</div>
			<div class="section">
				<label>商品ID</label>
				<input type="text" v-model="goodsID" class="form-control input1"/>
			</div>
			<div class="section">
				<label>商品种类</label>
				<input type="text" v-model="goodsClassify" class="form-control input1"/>
			</div>
			<button class="btn btn-info" id="btn1" @click="search">查询</button>
			<button class="btn btn-info" id="btn2" @click="goodsCreate">添加商品</button>
	    </div>
	    <div id="tablebox">
		    <table class="table table-hover table-striped table-bordered" id="table1">
		      <thead>
		        <tr>
		        	<th>operation</th>
		          	<th v-for="(value, key) in data[0]" v-if="columns.indexOf(key) > -1">{{key}}</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <tr v-for="obj in data">
		          	<td><button class="btn btn-info compile" :id="obj.id" @click="modify">编辑</button> <button class="btn btn-danger del" :id="obj.id" @click="del">删除</button> </td>
					<td v-for="(value, key) in obj"  v-if="columns.indexOf(key) > -1">{{value}}</td>
				</tr>
		        </tr>
		      </tbody>
		    </table>
	    </div>
	  </div>
  </div>
</template>

<script type="text/javascript">
	import './home.css'
	import create from '../create/create.vue'
	import modify from '../modify/modify.vue'
	import $ from 'jquery'
	import erp from '../../assets/common/global'
	export default {
		components: {
			'zh-create':create,
			'zh-modify':modify
		},
		data(){
			return {
				showcreate:false,
				showmodify:false,
				data:[],
				dataOrigin:[],
				datamodify:[],
				goodsname:'',
				goodsID:'',
				goodsClassify:'',
				columns:['id','Classify','price','name','characteristic','goodsSale']
			}
		},
		methods: {
			goodsCreate:function(){
				this.showcreate=true;
			},
			search:function(){
				var _dataset = [];
				console.log(this.dataOrigin)
				for(var i=0;i<this.dataOrigin.length;i++){
  						var obj1= this.dataOrigin[i]
  						console.log(obj1)
  						var _result = (
	  						(!this.goodsname || obj1.name.indexOf(this.goodsname) > -1)
	  						&& (!this.goodsID || obj1.id.indexOf(this.goodsID) > -1)
	  						&& (!this.goodsClassify || obj1.Classify.indexOf(this.goodsClassify) > -1)
	  					);
						console.log(_result)
  						if(_result){
  							_dataset.push(obj1);
  						}
  				}
  					console.log(_dataset);
  					this.data = _dataset;

			},
			modify:function(event){
				var id=event.target.id
				var self=this
				$.ajax({
					type:'get',
					url:erp.baseUrl+'getGoodsdata',
					data:{"id":id},
					success:function(response){
						console.log(response)
						console.log(self.$children[1])
						var data=response.data[0]
						// self.$children[1].goodsID=data.id
						// self.$children[1].goodsname1=data.name[0]
						// self.$children[1].goodsname2=data.name[1]
						// self.$children[1].goodsClassify=data.Classify
						// self.$children[1].goodsSale=data.goodsSale
						// self.$children[1].goodsprice1=data.price[0]
						// self.$children[1].goodsprice2=data.price[1]

						self.$children[1].goodsdata=data;
						self.showmodify=true
					},
					error:function(response){
						console.log(response);
					}
				})
			},
			del:function(event){
				var id=event.target.id
				var r=confirm('确定删除？')
				if(r){
					var self=this
					$.ajax({
						type:'get',
						url:erp.baseUrl+'deldata',
						data:{"id":id},
						success:function(response){
							$.alert(response.message)
						},
						error:function(response){
							console.log(response);
						}
					})
				}
			}
		},
		created(){
			var self=this;
			$.ajax({
				type:'get',
				url:erp.baseUrl+'getGoodsdata',
				success:function(response){
					console.log(response)

					for(var i=0;i<response.data.length;i++){
						var name='';
						response.data[i].name.map(function(item,index){
							name+=item+','
							return name;
						})
						response.data[i].name=name.slice(0,-1);

						var price='';
						response.data[i].price.map(function(item,index){
							price+=item+','
							return price;
						})
						response.data[i].price=price.slice(0,-1);

						var characteristic='';
						response.data[i].characteristic.map(function(item,index){
							characteristic+=item
							return characteristic;
						})
						response.data[i].characteristic=characteristic;
					}
					self.data=response.data;
					self.dataOrigin=response.data;
				},
				error:function(){

				}
			})
		}
	}
</script>