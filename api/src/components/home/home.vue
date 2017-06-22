<template>
	<div class="home">
		<zh-create v-show="showcreate"></zh-create>
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
				<input type="text" class="form-control input1" />
			</div>
			<div class="section">
				<label>商品ID</label>
				<input type="text" class="form-control input1"/>
			</div>
			<button class="btn btn-info" id="btn1">查询</button>
			<button class="btn btn-info" id="btn2" @click="goodsCreate">添加商品</button>
	    </div>
	    <div id="tablebox">
		    <table class="table table-hover table-striped table-bordered" id="table1">
		      <thead>
		        <tr>
		          <th>1</th>
		          <th>2</th>
		          <th>3</th>
		          <th>4</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>12111111111</td>
		          <td>12111111111</td>
		          <td>33</td>
		          <td>44</td>
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

	export default {
		components: {
			'zh-create':create
		},
		data(){
			return {
				showcreate:false,
			}
		},
		methods: {
			goodsCreate:function(){
				this.showcreate=true;
			}
		},
		created(){
			// this.$on('dk', (a) => {
			// 	// this.msg = 'dk'
			// 	console.log(a)
			// })
		}
	}
</script>