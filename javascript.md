## 20

## 1 原生 Ajax 请求

```js
var Ajax = {
  get: function (url, fn) {
    // XMLHttpRequest对象用于在后台与服务器交换数据
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      // readyState == 4说明请求已完成
      if ((xhr.readyState == 4 && xhr.status == 200) || xhr.status == 304) {
        // 从服务器获得数据
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send();
  },
  // datat应为'a=a1&b=b1'这种字符串格式，在jq里如果data为对象会自动将对象转成这种字符串格式
  post: function (url, data, fn) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    // 添加http头，发送信息至服务器时内容编码类型
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        fn.call(this, xhr.responseText);
      }
    };
    xhr.send(data);
  },
};
```

## 2 跨域

1、 通过 jsonp 跨域
6、 跨域资源共享（CORS）
7、 nginx 代理跨域
8、 nodejs 中间件代理跨域
2、 document.domain + iframe 跨域
3、 location.hash + iframe
4、 window.name + iframe 跨域
5、 postMessage 跨域 XDM 跨文档通信
9、 WebSocket 协议跨域

## 3 get 与 post 区别

1. 浏览器在回退时，`get` **不会重新请求**，但是`post`会重新请求。【重要】
2. `get`请求会被浏览器**主动缓存**，而`post`不会。【重要】
3. `get`请求的参数，会报**保留**在浏览器的**历史记录**里，而`post`不会。做业务时要注意。为了防止`CSRF`攻击，很多公司把`get`统一改成了`post`。
4. `get`请求在`url`中`传递的参数有大小限制，基本是`2kb`，不同的浏览器略有不同。而 post 没有注意。
5. `get`的参数是直接暴露在`url`上的，相对不安全。而`post`是放在请求体中的。

## 4 防抖节流

防抖，一段时间内反复触发只执行一次 10 执行一次

节流，一段时间内反复触发只在固定频率内执行 10 秒执行 10 次

## 5 手写 Promise

## 6 apply call bind 区别

三者都可以改变函数的 this 对象指向。
三者第一个参数都是 this 要指向的对象，如果如果没有这个参数或参数为 undefined 或 null，则默认指向全局 window。
三者都可以传参，但是 apply 是数组，而 call 是参数列表，且 apply 和 call 是一次性传入参数，而 bind 可以分为多次传入。
bind 是返回绑定 this 之后的函数，便于稍后调用；apply 、call 则是立即执行 。
bind()会返回一个新的函数，如果这个返回的新的函数作为构造函数创建一个新的对象，那么此时 this 不再指向传入给 bind 的第一个参数，而是指向用 new 创建的实例
