import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
// import Hello from '@/components/Hello'
import personalSetting from '@/components/personalSetting'
import baseSetting from '@/components/baseSetting'
import privateSetting from '@/components/privateSetting'


Vue.use(Router);
Vue.use(Resource);



export default new Router({
  routes: [
      {path:'',component:personalSetting}
     ,{path:'/update',component:personalSetting,children:[
       {path:'',component:baseSetting},
       {path:'/update/baseSetting',component:baseSetting},
       {path:'/update/privateSetting',component:privateSetting}]}
      ]
})
