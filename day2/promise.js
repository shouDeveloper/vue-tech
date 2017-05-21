// setTimeout(function () {
// 	console.log("finish");
// }, 1000);
// console.log("first");

//settimeout是个异步过程不会阻塞主进程；setInterval setImmediate eventLoop 。

//回调地狱问题  callback hell 

// const fs=require('fs');

// fs.readFile("./obverse.js",function(err,data){
// 	if(err){
// 		console.error(err);
// 	}else{
// 		// console.log(data.toString());
// 		let ret=data.toString();
// 		fs.readFile(ret+"1234"+".js",(err,data)=>{
// 			//回调地狱问题
// 		})
// 	}
// })

// 解决这个问题  promise
// promise是js的一个构造函数 Array Object

// let promise =new Promise(()=>{});

// console.log(promise instanceof Promise);

// Promise构造函数接受一个函数作为参数，这个函数有两个参数，第一个是resolve方法，第二个是reject方法。

let promise =new Promise(function(resolve,reject){
	setTimeout(function () {
		if(true){
			resolve("finish");
		}else{
			// reject("errororororo");
		}
	}, 1000);
});

// promise then 就下一步 就是这个异步处理完成下一步要运行的部分，会把resolve处理的参数传给第一个then的函数参数的参数
// promise.then(function(value){
// 	console.log(value);
// })

//reject性质和resolve一样，不过捕获他用promise.catch  或者 then的第二个函数参数

// promise.then(function(value){
// 	console.log("success-->",value);
// },function(err){
// 	console.log("fail--->",err);
// })

// promise.then(()=>{}).catch((err)=>{
// 	console.log(err);
// })

//链式调用then

let promise2 = function(value){
	return new Promise((resolve)=>{
	setTimeout(function () {
		resolve("second promise"+value);
	}, 500);
})
}
// promise.then((value)=>{
// 	return promise2(value);
// }).then((value2)=>{
// 	console.log(value2);
// })

// Promise.prototype.all 同时处理多个异步操作（promise）
//其接受一个数组作为参数，数组每项都是一个promise对象，
// Promise.all([promise,promise2("")]).then((res)=>{
// 	console.log(res);
// }).catch((err)=>{
// 	console.error(err);
// })

// Promise.prototype.race()  同时运行，但是运行的时候如果一个promise完成了，就退了

// ##http://es6.ruanyifeng.com/#docs/promise