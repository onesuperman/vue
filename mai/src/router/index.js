import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'
import '../assets/css/footer.css'

Vue.use(Router)

import Home from '../views/home.vue'

export default new Router({
  routes: [
    { path:'/', component:Home },
    { path:'/Home', component:Home }
  ]
})
