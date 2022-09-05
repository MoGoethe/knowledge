// function getNums36() {
//   var nums36 = [];
//   for (var i = 0; i < 36; i++) {
//     if (i >= 0 && i <= 9) {
//       nums36.push(i);
//     } else {
//       nums36.push(String.fromCharCode(i + 87));
//     }
//   }
//   return nums36;
// }

// function scale36(n) {
//   var arr = [];
//   var nums36 = getNums36();
//   while (n) {
//     var res = n % 36;
//     arr.unshift(nums36[res]);
//     n = parseInt(n / 36);
//     console.log(nums36[res], n);
//   }
//   return arr.join('');
// }

// console.log(scale36(73));

// function Product(name, price) {
//   this.name = name;
//   this.price = price;
// }

// function Food(name, price) {
//   Product.mycall(this, name, price);
//   this.category = 'food';
// }

// Function.prototype.mycall = function (context) {
//   const ctx = context || window;
//   const args = [...arguments].splice(1);
//   if (typeof context === 'object') {
//     ctx.fn = this;
//     const res = ctx.fn(...args);
//     delete ctx.fn;
//     return res;
//   } else {
//     this(args);
//   }
// };

// let a = 'a';
// const b = function () {
//   console.log(1);
// };
// b.mycall(a);

// console.log(new Food('cheese', 5).name);
/// 节流函数
// function thr(fn, time) {
//   let timer = null;
//   return function () {
//     if (timer) return;
//     timer = setTimeout(function () {
//       fn();
//       timer = null;
//     }, time);
//   };
// }

// const f = function () {
//   console.log(1);
// };

// // setInterval(thr(f, 3000), 100);

function deb(fn, time) {
  let timer = null;

  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      fn.apply(context, args);
      timer = null;
    }, time);
  };
}

// const f2 = deb(f, 1000);
// for (let i = 0; i < 10; i++) {
//   f2();
// }

// const onwatch = (target, setter, getter) => {
//   const proxy = new Proxy(target, {
//     get(target, key) {
//       getter && getter(key, target);
//       return Reflect.get(target, key);
//     },
//     set(target, key, val) {
//       setter && setter(key, val, target);
//       Reflect.set(target, key, val);
//     },
//   });
//   return proxy;
// };

// const testObj = {
//   name: 'mgdi',
//   age: 18,
// };

// const handler1 = (key, val, obj) => {
//   console.log(
//     `setter ${key} has changed, value is ${val}, full data is ${obj}`
//   );
// };
// const handler2 = (key, obj) => {
//   console.log(`getter ${key},  full data is ${obj}`);
// };

// const pro = onwatch(testObj, handler1, handler2);

// pro.name = 'seaseeyoul';
// console.log(pro.name);

// class Lib extends require('events').EventEmitter {
//   constructor() {
//     super();

//     setTimeout(() => {
//       this.emit('init');
//     });
//   }
// }

// const lib = new Lib();

// lib.on('init', (_) => {
//   // 这里将永远不会执行
//   console.log('init!');
// });

// function isPlainObj(obj) {
//   if (typeof obj !== 'object' || obj === null) return false;
//   let proto = obj;
//   console.log(Object.getPrototypeOf(proto), 1);
//   while (Object.getPrototypeOf(proto) !== null) {
//     console.log(Object.getPrototypeOf(proto));
//     proto = Object.getPrototypeOf(proto);
//   }
//   return Object.getPrototypeOf(proto) === obj;
// }

// const a = {
//   a: 1,
//   b: () => {},
// };
// const c = { c: 1 };

// console.log(isPlainObj(a), isPlainObj(c));

// 手写create
function create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}

// 手写instanceof
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
    prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;

    proto = Object.getPrototypeOf(proto);
  }
}

// 手写new
function objectFactory() {
  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments);
  let result = null;
  // 判断参数是否是一个函数
  if (typeof constructor !== 'function') {
    console.error('type error');
    return;
  }
  // 新建一个空对象，对象的原型为构造函数的 prototype 对象
  newObject = Object.create(constructor.prototype);
  // 将 this 指向新建对象，并执行函数
  result = constructor.apply(newObject, arguments);
  // 判断返回对象
  let flag =
    result && (typeof result === 'object' || typeof result === 'function');
  // 判断返回结果
  return flag ? result : newObject;
}
// 使用方法
objectFactory(构造函数, 初始化参数);

// 手写 call
// call函数实现
Function.prototype.myCall = function (context) {
  // 判断调用对象
  if (typeof this !== 'function') {
    console.error('type error');
  }
  // 获取参数
  let args = [...arguments].slice(1),
    result = null;
  // 判断 context 是否传入，如果未传入则设置为 window
  context = context || window;
  // 将调用函数设为对象的方法
  context.fn = this;
  // 调用函数
  result = context.fn(...args);
  // 将属性删除
  delete context.fn;
  return result;
};

// 手写apply
Function.prototype.myApply = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  let result = null;
  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;
  // 将函数设为对象的方法
  context.fn = this;
  // 调用方法
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};

// bind 函数实现
Function.prototype.myBind = function (context) {
  // 判断调用对象是否为函数
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  // 获取参数
  var args = [...arguments].slice(1),
    fn = this;
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    return fn.apply(
      this instanceof Fn ? this : context,
      args.concat(...arguments)
    );
  };
};

const log = () => {
  console.log(1);
};
