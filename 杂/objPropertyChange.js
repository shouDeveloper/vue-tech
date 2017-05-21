var obj={
	a:1
}

// 方法1，自已定义一个函数

// function setProperty(property,value){
// 	//这个里面写方法 
// 	obj[property]=value;
// }
//react 微信小程序  setState setData  异步的。
// setProperty("a",2);

// 方法2  使用defineProperty

// Object.defineProperty(obj,"a",{
// 	set:function(value){
// 		//这里面写钩子方法
// 		console.log(value);
// 		return value+"1";
// 	}
// })
// Object.defineProperties(obj,{
// 	'a':{
// 		value:"",
// 		set(value){
// 			console.log(value);
// 		}
// 	}
// })

// obj.a="2";
// console.log(obj.a);

