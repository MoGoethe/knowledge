
1. React18 做了什么优化？
- 新增API
```js
const [text, setText] = useState('text');
// https://randomuser.me/api
// Concurrent 模式 自定义更新任务的优先级， 自带防抖节流
const defferedText = useDefferedValue(val) // 降低更新优先级


// useTransition, startTransition
const [isPending, startTransition] = useTransition();
// 从一个视图向另一个视图更新，更新完成之前保留在当前状态
```
2. Suspense 是什么
等待数据加载，自带loading...

3. getDerivedStateFromError(error) 错误辩边界

```js
import { Component } from "react";

export default class ErrorBoundaryPage extends Component{
  state = {
    hasError: false,
    error: null,
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    }
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// forwards together backwards tail -> backwards/forwards
// tail -> hidden 不展示loading collapsed -> 轮到自己的适合再显示
<SuspenseList revealOrder="forwards">
  <ErrorBoundaryPage>
    <Suspense fallback={<h1>loading...</h1>}>
      <User resource={resource} />
    </Suspense>
  </ErrorBoundaryPage>
  <Suspense fallback={<h1>loading...</h1>}>
    <Num resource={resource} />
  </Suspense>
</SuspenseList>

```
5. useSyncExternalStore
   可以与外部Store 进行关联， 换句话说，可以不再使用 react-redux 直接使用redux

6. useInsertionEffect
   在dom更新前执行

10. diff 算法做了什么？

11. 前端路由
hash模式
  window.onhashchange事件来监听hash值的改变,一旦url中的hash值发生改变,便会触发该事件。
  直接使用
history 模式
  history.pushState()或history.replaceState()
  需要后端配合
