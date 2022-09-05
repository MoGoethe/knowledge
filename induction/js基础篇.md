1. socket.io
基于 websocket, socket 套接字是支持TCP/IP通信的操作基本单元，
是对网络中不同主机上的应用进程之间进行双向通信的端点的抽象，通过ip和端口连接通信中端点。
信息写入主机Socket 中，发送到接收端主机的Socket 中完成传输。

2. 金钱价格格式化
```js
const formatMoney = (money) => {
  return money.replace(
    new RegExp(`(?!^)(?=(\\d{3})+${money.includes('.') ? '\\.' : '$'})`, 'g'),
    ','
  )  
}
```

3. 宏任务与微任务
单进程，同一时间只能处理一个事件
1、常见的宏任务：
script(整体代码)、setTimeout、setInterval、I/O、UI交互事件、postMessage、MessageChannel、setImmediate(Node.js 环境)
2、常见的微任务：、Promise.then、Object.observe、MutaionObserver （制定的dom发生变化时调用）、process.nextTick(Node.js 环境)
宏任务 -> 微任务 -> 宏任务 -> 微任务

4. 面向对象
把一组数据结构和处理它们的方法组成对象（object），把相同行为的对象归纳为类（class），通过类的封装（encapsulation）隐藏内部细节，通过继承（inheritance）实现类的特化（specialization）／泛化（generalization），通过多态（polymorphism）实现基于对象类型的动态分派（dynamic dispatch）。