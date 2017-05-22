## 跨域

浏览器同源保护策略

要求

* 同协议  https https ws socks
* 同hostname
* 同端口

## 如何跨域请求

### jsonp

浏览器通过 script 标签引入外部js文件。

后端返回例子
```
var data="retret"
jsonpCallback(data);
```

前端使用

```js
window.jsonpCallback=function(data){
}
```

### 图片

```html
<img src="www.xxx.com/a.jpg?a=1&b=2"/>
```

### websocket

### cors 跨域

```
Access-Control-Allow-Origin 
Origin
Methods
```

