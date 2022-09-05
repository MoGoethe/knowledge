## 10

## React 原理

## 1. react-router 实现原理

两个模式，一个`history`模式，一个`hash`模式。底层的基础实现都是通过调用 API 来实现的，其中 history 模式主要通过 `HTML5 history API` 来实现。其中路由的变更上使用：

```js
window.history.go(-1); // 后退
window.history.go(1); // 前进
history.pushState(); // 新增
history.replaceState(); //修改
window.addEventListener('popstate', function (e) {});
```

通过搭配 windows 事件监听 popstate 来进行事件响应。
而 hash 模式则是通过 window.location.hash 属性获取和设置 hash 值。 通过监听 hashchange 来执行相同的事件。
history 库就是完成功能的基础，也是 React-router 的核心
React-router 则是 React-router-dom 核心，主要对基于 React 的实现基础组件，提供路由渲染组件，路由唯一性匹配组件，重定向组件等功能组件
其中 `BrowserRouter`， `HashRouter` 分别创建不同的路由模式
Router 接收 location 变化，派发更新流
Routes 匹配路由
Route 承载页面容器

## 2 JSX 相关

JSX 代表 JavaScript XML。它是一个 React 扩展
它比常规 JavaScript 更快，因为它在将代码转换为 JavaScript 时执行优化。
React 不是通过将标记和逻辑放在单独的文件中来分离技术，而是使用包含两者的组件。
它使创建模板变得更加容易。
