function Watcher(){
	this.list={};
}
Watcher.prototype.addEventListener=function(eventType,callback){
	if(!this.list[eventType]){
		this.list[eventType]=[callback];
	}else{
		this.list[eventType].push(callback);
	}
}
Watcher.prototype.on=Watcher.prototype.addEventListener;

Watcher.prototype.emit = function (eventType) {
	var eventList=this.list[eventType];
	if(!eventList){return ;}
	eventList.forEach((item)=>{
		item&&item();
	});
};

Watcher.prototype.removeListener = function (eventType,callback) {
	this.list[eventType].splice(this.list[eventType].indexOf(callback),1);
};

var ev=new Watcher();

ev.addEventListener("click",function(){
	console.log(1);
});

var testRemoveListener=function(){
	console.log("remove");
}
ev.addEventListener("click",testRemoveListener);

ev.removeListener("click",testRemoveListener);//这里删除了这个listener函数

ev.on("click",function(){
	console.log(2);
});


ev.addEventListener("customerEvent",function(){
	console.log("customerEvent");
});


ev.emit("click");

ev.emit("customerEvent")