# 10

## 0 什么是 typescript

Typescript 是一个强类型的 JavaScript 超集，支持 ES6 语法，支持面向对象编程的概念，如类、接口、继承.
增加了静态类型，可以在开发人员编写脚本时检测错误，使得代码质量更好，更健壮。

## 1 typescript 编译原理

- scanner.ts 词法分析
- parser.ts 语法解析
- binder.ts 提取符号表——作用域分析
- binder.ts 提取流程图——流程分析
- checker.ts 查类型错误——语义分析
- transformer.ts 语法转换——代码优化
- emitter.ts 代码生成

## 2 type 和 interface 的区别

- type 是类型别名， interface 是接口类型，
- interface 可以定义多次，并将被合并视为单个接口
- extends 方式不同，interface 可以直接 extends，type 则是通过交叉类型来实现继承。
- Type 可以计算属性，生成映射类型， type 能使用 in 关键字生成映射类型，但 interface 不行。
- 描述类型：对象、函数两者都适用，但是 type 可以用于基础类型、联合类型、元祖。

```ts
type Keys = 'firstname' | 'surname';

type DudeType = {
  [key in Keys]: string;
};

const test: DudeType = {
  firstname: 'Pawel',
  surname: 'Grzybek',
};
```

## 3 readonly 与 const 的区别

const 可以防止变量的值被修改，readonly 可以防止变量的属性被修改。
常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。 之所以可以这么做是因为，常量枚举不允许包含计算成员。

## 4 TypeScript 中 any、never、unknown、null & undefined 和 void 有什么区别？

any: 动态的变量类型（失去了类型检查的作用）。
never: 永不存在的值的类型。例如：never 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型。
unknown: 任何类型的值都可以赋给  unknown  类型，但是  unknown  类型的值只能赋给  unknown  本身和  any  类型。
null & undefined: 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把  null 和 undefined 赋值给 number 类型的变量。当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自。
void: 没有任何类型。例如：一个函数如果没有返回值，那么返回值可以定义为 void。

## 5 TypeScript 中如何联合枚举类型的 Key?

```ts
enum str {
  A,
  B,
  C,
}
type strUnion = keyof typeof str; // 'A' | 'B' | 'C'
```

## 5 对 TypeScript 类中成员的 public、private、protected、readonly 修饰符的理解？

- public: 成员都默认为 public，被此限定符修饰的成员是可以被外部访问；
- private: 被此限定符修饰的成员是只可以被类的内部访问；
- protected: 被此限定符修饰的成员是只可以被类的内部以及类的子类访问;
- readonly: 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

## 6 简述工具类型 Exclude、Omit、Merge、Intersection、Overwrite 的作用。

Exclude<T, U> 从  T  中排除出可分配给  U 的元素。
Omit<T, K> 的作用是忽略 T 中的某些属性。
Merge<O1, O2> 是将两个对象的属性合并。
Compute<A & B> 是将交叉类型合并
Intersection<T, U>的作用是取 T 的属性,此属性同样也存在与 U。
Overwrite<T, U> 是用 U 的属性覆盖 T 的相同属性。

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;
