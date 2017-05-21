<template>
	<div class="index">
		<Wheel></Wheel>
		<ArticleList :id="id"></ArticleList>
	</div>
</template>
<script>
	import Wheel from '../components/Wheel.vue';
	import ArticleList from '../components/AtricleList.vue';
	export default {
		name:"index",
		data(){
			return {
				id:null
			}
		},
		components:{
			Wheel,ArticleList
		}
	}
</script>