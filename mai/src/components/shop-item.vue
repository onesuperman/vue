<template>
  <div class="item">
  	<div>
  		<div class="item-img"><img :alt="item.name_title" :src="item.sku_info[itemIndex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
  		</div>
  		<h6>{{item.name}}</h6>
  		<h3 >{{item.name_title}}</h3>
  		<div class="params-colors">
  			<ul class="colors-list">
  				<li v-for="(item,index) in item.sku_info">
            <a href="javascript:;" class="active" :title="item.spec_json.show_name" @click="tab(index)">
              <img :src="'http://img01.smartisanos.cn/'+item.spec_json.image+'20X20.jpg'">
            </a>
          </li>
  			</ul>
  		</div>
  		<div class="item-btns clearfix">
  			<span class="item-gray-btn">
          <a href="javascript:;" target="_blank">查看详情</a>
        </span>
        <span class="item-blue-btn" @click="addCarPanelData(item.sku_info[itemIndex])">加入购物车 </span>
  		</div>
  		<div class="item-price clearfix">
  			<i>¥</i><span>{{item.price}}</span>
  		</div>
  		<div class="discount-icon">false</div>
  		<div class="item-cover">
  			<a href="javascript:;" target="_blank"></a>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        //默认显示
        itemIndex:0
      }
    },
    //接收父组件的参数
    props:{
      item:Object
    },
    //方法
    methods:{
      tab(index){
        //赋值
        this.itemIndex=index
      },
      //加入购物车
      addCarPanelData(data){
        //调用方法  固定写法 this.$store.commit('调用的方法名',传递的参数)
        this.$store.commit('addCarPanelData',data)
      }
    }
  }
</script>

<style>
</style>
