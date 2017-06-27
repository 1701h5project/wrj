<template>
    
    <div class="main1">
        <top></top>
        <!--没有商品状态显示-->
        <div class="empty" v-show="show">
            <p class="title">购物车</p>
            <div class="car-empty">
                <p>购物车为空</p>
                <p></p>
            </div>
            <div class="continue">
                <a href="javascript:;">继续购物</a>
            </div>
        </div>
        

        <!--有商品状态显示-->
        <div class="hasgoods" v-show="show">
            
            <div class="title-top">
                <span>购物车</span>
            </div>
            <!--商品信息-->
            <div class="car-list">
            <div  v-for="(item,index) in goods" class="goodsInfo clearfix">
               
                <input type="checkbox" class="choose" v-model="item.checked" @change="checkIsall(index)">
                <div class="imgInfo">
                    <a href="#">
                        <img :src="'src/assets/imgs/goods/'+item.imgurl" alt="">
                    </a>
                </div>
                <div class="textInfo">
                    <a href="#" class="nameInfo">{{ item.name }}</a>
                    <p class="priceInfo">¥<span class="cost">{{ item.price }}</span></p>
                    <div class="goodsCount clearfix">
                        <span class="minus" @click="minus(index)">-</span>
                        <span class="text">{{ item.qty }}</span>
                        <span class="add" @click="add(index)">+</span>
                    </div>
                    <p class="sendInfo">预计发货时间：2017年6月30日</p>
                </div>
                <div class="del">
                    <a href="javascript:;" @click="close(index)">X</a>
                </div>
            </div>
            </div>
            <!---------------->
            <div class="footer">
                <div class="total">
                   <input type="checkbox" class="all" v-model="allChecked" @click="checkAll">
                    <div class="goods-qty clearfix">
                        <p>商品数量：</p>
                        <p class="qty">{{ count }}</p>
                    </div>
                    <div class="goods-price clearfix">
                        <p>商品总计：</p>
                        <p class="price">¥<span>{{total}}</span></p>
                    </div>  
                </div>
                <div class="pay">
                    <a href="#">继续购物</a>
                    <a href="#">去结算</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
import './carlist.scss'

import top from '../top/top.vue'
import { mapGetters, mapActions } from 'vuex'
import $ from 'jquery'
import http from '../../utils/HttpClient'
import erp from '../../assets/common/global'
export default {
    components: {
        top
    },
    data: function(){
        return {
            show:true,
            count:0,
            goods:[],
            allChecked:true,
            total:0.00
        }
    },
    
    
    methods:{
        showMain(arg){
            this.show = arg;
        },
        //点击添加数量
        add:function(idx){
            
            this.goods[idx].qty++
           this.sum()
        
        },
        //点击减少数量
        minus:function(idx){
            if(this.goods[idx].qty > 1){
                this.goods[idx].qty--
            }
            this.sum()
        },
        //删除商品
        close:function(idx){
            this.goods.splice(idx,1)
            this.sum()
        },
        //点击选择框更新价格
        checkIsall: function (idx) {
            setTimeout(function(){this.sum()}.bind(this),100)
            
            // var t = 0;
            for (var i = 0; i < this.goods.length; i++) {
                this.goods[i].checked?this.allChecked = false:this.allChecked = true;
                    
                
            }
            
            // if (t == this.goods.length) {
            //     this.allChecked = true
            // } else {
            //     this.allChecked = false
            // }
            
          
        },
        //全选
        checkAll:function(){
            
            if(this.allChecked){
                this.allChecked = false
                for (var i = 0; i < this.goods.length; i++) {
                    this.goods[i].checked = this.allChecked;
                }
            }else{
                this.allChecked = true
                for (var i = 0; i < this.goods.length; i++) {
                    this.goods[i].checked = this.allChecked;
                }
            }
            
         setTimeout(function(){this.sum()}.bind(this),300)
               
        },
        //更新价格
        sum:function(){
            this.total = 0;
            this.count = 0;
            for (var i = 0; i < this.goods.length; i++) {
                if (this.goods[i].checked) {
                    this.total += this.goods[i].price * this.goods[i].qty
                    this.count += Number(this.goods[i].qty)
                }

            }
        },
        //
        
    
        
    },
    created:function(){
        
       $.get(erp.baseUrl+'carlist', {"userphone":window.localStorage.getItem('userphone')},function(res){
        console.log(res)
            this.goods = res
            if(this.goods.length>0){
                $('.hasgoods').show()
                 $('.empty').hide()
                
            }else{
                $('.empty').show()
                $('.hasgoods').hide()
            }
             
       }.bind(this))

       setTimeout(function(){this.sum()}.bind(this),500)
       
    }
 

}
</script>
