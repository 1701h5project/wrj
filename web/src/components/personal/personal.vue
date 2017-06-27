<template>
	<div id="personal-store">
		<matexia></matexia>
        <section  v-show="qwe">
            <div class="personal-info">
                <div class="personal-main">
                    <div class="personal-use">
                        <div class="personal-photo">
                            <img src="../../assets/imgs/goods/imgurl-1498180433556.jpg" alt="">
                        </div>
                        <div class="personal-name">{{getItem}}</div> 
                    </div>
					<ul class="personal-ul">
						<li class="personal-li"><a href="javascript:;">我的帐号</a></li>
						<li class="personal-li"><a href="javascript:;">我的订单</a></li>
						<li class="personal-li"><a href="javascript:;">我的代币</a></li>
						<li class="personal-li"><a href="javascript:;">我的优惠卷</a></li>
						<li class="personal-li"><a href="javascript:;">我的回收订单</a></li>
						<li class="personal-out">
							<a  href="javascript:;" @click="loginOut">退出</a>
						</li>
					</ul>
                </div> 
            </div>
        </section>
    </div>
</template>

<script type="text/javascript">
	import './personal.scss'
    import top from '../top/top.vue'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
    import erp from '../../assets/common/global.js'
	export default {
        components:{
			matexia:top
		},
		data(){
			return{
				qwe:true,
				getItem:null
			}
		},
		methods: {
			showMain(arg){
				this.qwe = arg;
			},
			loginOut:function(){
				window.localStorage.removeItem('userphone')
				this.$router.push({path: '/'});
			}
		},
		created: function(){
			this.getItem = window.localStorage.getItem('userphone')
			if(this.getItem == null){
				this.$router.push({path: '/login'});
			}
		}
	}
</script>