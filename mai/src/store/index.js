//第一步 引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//第二步 创建一个store
let store=new Vuex.Store({
  state:{
    //存放数据
    carPanelData:[]
  },
  mutations:{
    addCarPanelData(state,data){
      //boff是否第一次添加
      let boff=true;
      state.carPanelData.forEach(goods=>{
        if(goods.sku_id==data.sku_id){
          goods.count++
          boff=false;
        }
      });
      if(boff){
        let goodsData=data;
        Vue.set(goodsData,'count',1);
        state.carPanelData.push(goodsData);
      }
      console.log(state.carPanelData)

    }
  }
})

//第三步 将store暴露
export default store
