<template>
	<div id="container">
		<div class="toggle">
			<router-link to="/a">跳转到A页面</router-link>
			<button @click="toB">跳转到B页面</button>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name:"app",
	data(){
		return {
		}
	},
	methods:{
		toB(){
			this.$router.push("b");
		}
	}
}
</script>
<style>
.toggle{
	width: 100%;
	background: red;
}
</style>
