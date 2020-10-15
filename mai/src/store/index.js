//第一步 引入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//第二步 创建一个store(仓库)
let store=new Vuex.Store({
  //数据初始化
  state:{
    //存放数据
    carPanelData:[],
    //是否为最大值
    maxOff:false,
    //控制购物车的隐藏显示
    carShow:false,
    //创建小球
    ball:{
      show:false,//显示与隐藏
      el:null,//点击的对象
      img:''//图片
    }
  },
  //计算
  getters:{
    //数量
    totalCount(state){
      let count=0;
      state.carPanelData.forEach(goods=>{
        count+=goods.count;
      });
      return count;
    },
    //价格
    totalPrice(state){
      let price=0;
      state.carPanelData.forEach(goods=>{
        price+=goods.count*goods.price;
      });
      return price;
    }
  },
  //方法
  mutations:{
    //添加购物车
    addCarPanelData(state,data){
      //boff是否第一次添加
      let boff=true;
      state.carPanelData.forEach(goods=>{
        if(goods.sku_id==data.sku_id){
          goods.count++
          if(goods.count>goods.limit_num){
            //添加数据大于库存
            goods.count--
            state.maxOff=true;
            boff=false;
            return;
          }
          boff=false;
          //显示购物车
          state.carShow=true;
          //小球信息
          state.ball.show=true;
          state.ball.img=data.all_img;
          state.ball.el=event.path[0];
        }
      });
      if(boff){
        let goodsData=data;
        Vue.set(goodsData,'count',1);
        state.carPanelData.push(goodsData);
        //显示购物车
        state.carShow=true;
        //小球信息
        state.ball.show=true;
        state.ball.img=data.all_img;
        state.ball.el=event.path[0];
      }

    },
    //删除商品
    delCarPanelData(state,id){
      state.carPanelData.forEach((goods,index)=>{
        if(goods.sku_id==id){
          state.carPanelData.splice(index,1);
          return
        }
      });
    },
    //显示购物车
    showCar(state){
      state.carShow=true;
    },
    //隐藏购物车
    hideCar(state){
      //定时  缓慢隐藏
      setTimeout(()=>{
        state.carShow=false
      },500)
    },
    //关闭弹窗
    closePrompt(state){
     state.maxOff=false;
    }


  }
})

//第三步 将store暴露
export default store
