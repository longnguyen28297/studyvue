import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    { 
    	path: '/detail/:id',
    	name:'Detail', 
    	component: Detail,
    	props: true,
    	 },
  ]
})
