<template>
    <div class="ajaxmain">
        <h4>行业应用</h4>
        <ul>
            <li v-for="(item, index) in data">
                <router-link :to="{path:'/list',query: {id: 'n'}}">
                    <img :src="'src/assets/imgs/goods/'+item.imgurl[1]">
                    <p>{{item.name[0]}}</p>
                </router-link> 
            </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
	//import '../comclassfiy.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
    import erp from '../../../assets/common/global'

	export default {
		data: function(){
			return {
				data:'',
			}
		},

        created(){
            var self = this;
			$.post(erp.baseUrl+'getclassfiy', {'collection':'goods','Classify':'灵眸 Osmo系列'},function(res){
               var arr1=[];
                var maxwidth = 8;
                res.data.forEach(function(item){
                    if(item.name[0].length>maxwidth){
                        var name = item.name[0].substring(0,maxwidth);
                        item.name[0] = name
                    }else{item.name[0]}
                    arr1.push(item)
                })
                self.data = arr1
            })
		}
	}
</script>