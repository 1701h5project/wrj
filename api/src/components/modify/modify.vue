<template>
	<div class="createform">
		<div class="mask"></div>
		<form id="createForm2" target="ajaxFrame">
		  <div class="form-group">
		    <label for="goodsID">ID</label>
		    <input type="text" v-model="goodsdata.id" class="form-control" id="goodsID" placeholder="商品id" required disabled>
		  </div>
		  <div class="form-group">
		    <label for="goodsClassify">种类</label>
		    <input type="text" v-model="goodsdata.Classify" class="form-control" id="goodsClassify" placeholder="商品的种类" required>
		  </div>
		  <div class="form-group">
		    <label for="goodsname1">商品名称一</label>
		    <input type="text" v-model="goodsdata.name[0]" class="form-control" id="goodsname1" placeholder="商品名称">
		  </div>
		  <div class="form-group">
		    <label for="goodsname2">商品名称二</label>
		    <input type="text" v-model="goodsdata.name[1]" class="form-control" id="goodsname2" placeholder="商品名称">
		  </div>
		 <div class="form-group">
		    <label for="goodsprice1">商品一价格</label>
		    <input type="text" v-model="goodsdata.price[0]" class="form-control" id="goodsprice1" placeholder="商品价格">
		  </div>
		  <div class="form-group">
		    <label for="goodsprice2">商品二价格</label>
		    <input type="text" v-model="goodsdata.price[1]" class="form-control" id="goodsprice2" placeholder="商品价格">
		  </div>
		  <div class="form-group">
		    <label for="goodsSale">商品销量</label>
		    <input type="text" v-model="goodsdata.goodsSale" class="form-control" id="goodsSale" placeholder="销量">
		  </div>
		   <div class="form-group">
		    <label for="goodsCharacteristic1">商品一描述</label>
		    <input type="text" v-model="goodsdata.characteristic[0]" class="form-control" id="goodsCharacteristic1" placeholder="商品一描述">
		  </div>
		   <div class="form-group">
		    <label for="goodsCharacteristic2">商品二描述</label>
		    <input type="text" class="form-control" v-model="goodsdata.characteristic[1]" id="goodsCharacteristic2" placeholder="商品二描述">
		  </div>
		  <div class="form-group">
		    <label for="goodsCharacteristic3">商品三描述</label>
		    <input type="text" class="form-control" v-model="goodsdata.characteristic[2]" id="goodsCharacteristic3" placeholder="商品三描述">
		  </div>
		  <div class="form-group">
		    <label for="goodsCharacteristic4">商品四描述</label>
		    <input type="text" class="form-control" v-model="goodsdata.characteristic[3]" id="goodsCharacteristic4" placeholder="商品四描述">
		  </div>
		  <div class="form-group">
		    <label for="goodsCharacteristic5">商品五描述</label>
		    <input type="text" class="form-control" v-model="goodsdata.characteristic[4]" id="goodsCharacteristic5" placeholder="商品五描述">
		  </div>
		  <div class="form-group">
		    <label for="goodsCharacteristic6">商品六描述</label>
		    <input type="text" class="form-control" v-model="goodsdata.characteristic[5]" id="goodsCharacteristic6" placeholder="商品六描述">
		  </div>
		   <div class="form-group">
		    <label for="goodsPro1">商品相关问题一</label>
		    <input type="text" v-model="goodsdata.problem[0]" class="form-control" id="goodsPro1" placeholder="问题一">
		  </div>
		   <div class="form-group">
		    <label for="goodsAnswer1">回答一</label>
		    <input type="text" v-model="goodsdata.answer[0]" class="form-control" id="goodsAnswer1" placeholder="答案一">
		  </div>
		   <div class="form-group">
		    <label for="goodsPro2">商品相关问题二</label>
		    <input type="text" v-model="goodsdata.problem[1]" class="form-control" id="goodsPro2" placeholder="问题二">
		  </div>
		   <div class="form-group">
		    <label for="goodsAnswer2">回答二</label>
		    <input type="text" v-model="goodsdata.answer[1]" class="form-control" id="goodsAnswer2" placeholder="答案二">
		  </div>
		   <div class="form-group">
		    <label for="goodsPro2">商品相关问题三</label>
		    <input type="text" v-model="goodsdata.problem[2]" class="form-control" id="goodsPro2" placeholder="问题三">
		  </div>
		   <div class="form-group">
		    <label for="goodsAnswer2">回答三</label>
		    <input type="text" v-model="goodsdata.answer[2]" class="form-control" id="goodsAnswer2" placeholder="答案三">
		  </div>
		   <div class="form-group">
		    <label for="goodsPro2">商品相关问题四</label>
		    <input type="text" v-model="goodsdata.problem[3]" class="form-control" id="goodsPro2" placeholder="问题四">
		  </div>
		   <div class="form-group">
		    <label for="goodsAnswer2">回答四</label>
		    <input type="text" v-model="goodsdata.answer[3]" class="form-control" id="goodsAnswer2" placeholder="答案四">
		  </div>
		   <div class="form-group">
		    <label for="goodsPro2">商品相关问题五</label>
		    <input type="text" v-model="goodsdata.problem[4]" class="form-control" id="goodsPro2" placeholder="问题五">
		  </div>
		   <div class="form-group">
		    <label for="goodsAnswer2">回答五</label>
		    <input type="text" v-model="goodsdata.answer[4]" class="form-control" id="goodsAnswer2" placeholder="答案五">
		  </div>
		  <div class="form-group">
		    <label for="pricter11">轮播图一</label>
		    <input type="file" name="imgurl" id="pricter11" required>
		  </div>
		  <div class="form-group">
		    <label for="pricter12">轮播图二</label>
		    <input type="file" name="imgurl" id="pricter12" >
		  </div>
		  <div class="form-group">
		    <label for="pricter13">轮播图三</label>
		    <input type="file" name="imgurl" id="pricter13" >
		  </div>
		  <div class="form-group">
		    <label for="pricter14">轮播图四</label>
		    <input type="file"  name="imgurl" id="pricter14" >
		  </div>
		  <div class="form-group">
		    <label for="pricter15">轮播图五</label>
		    <input type="file" name="imgurl" id="pricter15" >
		  </div>
		  <button class="btn btn-info" @click="modify1">修改</button>
		  <button class="btn btn-danger" @click="back">返回</button>
		</form>
		<iframe name="ajaxFrame" style="display: none;"></iframe>
	</div>
</template>

<script type="text/javascript">
	import './modify.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import './jquery.form.js'
	import erp from '../../assets/common/global'
	export default {
		data: function(){
			return {
				// goodsID:'',
				// goodsClassify:'',
				// goodsname1:'',
				// goodsname2:'',
				// goodsprice1:'',
				// goodsprice2:'',
				// goodsSale:'',
				// goodsCharacteristic1:'',
				// goodsCharacteristic2:'',
				// goodsCharacteristic3:'',
				// goodsCharacteristic4:'',
				// goodsCharacteristic5:'',
				// goodsCharacteristic6:'',
				// goodsPro1:'',
				// goodsPro2:'',
				// goodsPro3:'',
				// goodsPro4:'',
				// goodsPro5:'',
				// goodsAnswer1:'',
				// goodsAnswer2:'',
				// goodsAnswer3:'',
				// goodsAnswer4:'',
				// goodsAnswer5:'',
				goodsdata:''
			}
		},
		methods: {
			modify1: function(event){
				var self=this;
				if(this.goodsdata.id && $('#pricter11').val()){
					var alldata=self.goodsdata
					delete alldata._id
					$('#createForm2').ajaxSubmit({
						type: 'post',
						url:erp.baseUrl+'update',
						data:alldata,
						success:function(response){
	                        if(response.status){
	                        	$.alert(response.message)
	                        	self.$parent.showmodify=false;
	                        	//修改成功后发起请求更新数据
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
										self.$parent.page=Math.ceil(response.data.length/4)
										self.$parent.data=response.data;
										self.$parent.dataOrigin=response.data;
									},
									error:function(err){
											console.log(err)
									}	
								})                        	
	                        }else{
	                        	$.alert(response.message)
	                        }
	                    },
	                    error:function(XmlHttpRequest,textStatus,errorThrown){
	                        console.log(XmlHttpRequest);
	                        console.log(textStatus);
	                        console.log(errorThrown);
	                    }
					})
				}
			},
			back:function(){
				this.$parent.showmodify=false;
			}

			// ...mapActions(['login'])
		}
	}
</script>