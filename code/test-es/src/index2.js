// var mergeKLists = function (lists) {
//   if (lists.length === 0) return null;
//   const results = [];
//   while (lists.flat(2).length > 0) {
//     let index = -1;
//     const mins = lists.map((list) => list[0]);
//     let min = Infinity;
//     for (let i = 0; i < mins.length; i++) {
//       if (min > mins[i]) {
//         index = i;
//         min = mins[i];
//       }
//     }
//     lists[index].length && lists[index].shift();
//     results.push(min);
//   }
//   return results;
// };

// const lists = [
//   [1, 4, 5],
//   [1, 3, 4],
//   [2, 6],
// ];
// console.log(mergeKLists(lists));
// const regex = /(fill|stroke)="((?!none).)*?"/gi;

// const svg = `
// <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.5L4 3.5L4 1.5L20 1.5L20 3.5ZM12 4.08579L16.9142 9L15.5 10.4142L13 7.91421L13
// 16.0858L15.5 13.5858L16.9142 15L12 19.9142L7.08579 15L8.5 13.5858L11 16.0858L11 7.91422L8.5 10.4142L7.08579 9L12 4.08579ZM20 22.5L4
// 22.5L4 20.5L20 20.5L20 22.5Z" fill="black" fill-opacity="0.9"/>
// <path fill="none" stroke="red" />
// <path fill="rgba(0,0,0,.2)" />
// <path fill="rgb(0,0,0)" />
// <path fill="#000" />
// <path fill="#bac" />
// <path fill="#abcddd" />
// <path fill="#000000" />
// </svg>
// `;

// const res = svg.match(regex);

// for (let key in res) {
//   console.log(key, res[key]);
// }

// function logDecorator(logger) {
//   return function () {
//     console.log(`Logged at ${new Date().toLocaleDateString()}`);
//     return logger();
//   };
// }

// class Calculator {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   multiply = () => {
//     return this.x * this.y;
//   };
// }

// const calculator = new Calculator(3, 5);
// const decoratorCalculator = logDecorator(calculator.multiply);
// console.log(decoratorCalculator());

// 装饰器其实只是一个语法糖，本质就是一个函数包裹另一个函数的高阶函数。

// 类装饰器 装饰器参数 => 装饰器本身 => 装饰目标;
function classLoggerDectorator(name) {
  return function decorator(Class) {
    return (...args) => {
      // console.log(
      //   `Class decorator logged at ${new Date().toDateString()},
      //    decorator parameter: ${name},
      //    Target class is ${Class}
      //    `
      // );
      return new Class(...args);
    };
  };
}

// 属性装饰器 (装饰目标，名称，属性描述) => 装饰器主体内容;
// 可以对 类，类属性进行装饰。
function readonlyAttr(target, name, descripter) {
  // console.log(target, name, descripter);
  descripter.writable = false;
  return descripter;
}

// 函数装饰器
function fnLoggerDectorator(name) {
  return function decorator(t, n, descriptor) {
    console.log('aaa');
  };
}

@classLoggerDectorator('Mult')
class Calculator {
  @readonlyAttr
  z = 1;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  @readonlyAttr
  mult = () => {
    return this.x * this.y;
  };

  @fnLoggerDectorator('sum')
  sum = () => {
    return this.x + this.y;
  };

  sub = () => {
    return this.x - this.y;
  };
}

let calculator = new Calculator(10, 10);
console.log(calculator.mult());
// 报错， 因为设置了只读
// calculator.z = 2;
console.log(calculator.sum(5));
