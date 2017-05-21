import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import PageA from '../pages/PageA.vue'
import PageB from '../pages/PageB.vue'

var routes=[
		{
			path:"/a",
			component:PageA
		},{
			path:"/b",
			component:PageB
		}
	]

export default new Router({
	routes,
	mode:'hash'
})