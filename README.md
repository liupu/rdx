#### rdx
#### redux
`使用redux，因为react主要是提供UI组件，而且各个组件之间的传值并不是那么好控制，所以在react项目开发过程中，一般需要引入redux`

`redux的理解`

`redux将应用的所有的状态都保存在一个对象里面，通过改变状态来实现视图的改变，视图和状态一一对应`

`主要内容和API`

`Store`

`store就是保存数据的地方，整个应用就一个store，可以通过createStore()函数，生成一个store`
```
import { createStore } from 'redux';
const store = createStore(reducer)
```
`state`

`state对象，是通过store对象的getState()方法得到的，表示某个时间点的数据`
```
const state = store.getState();
```
`一个state对应一个view，当state改变了，view就会改变，知道state就知道了view`

`action`

`action是用户在view上的操作，当action发出后，会触发reducer函数，生成新的state`

`action是一个对象，其中的type属性是必须的，type表示action的名称`

```
const action = {
    type:'ADD'
    num: '12'
}
```
`store.dispatch()`

`store.dispatch()是view发出action的唯一方法`
```
store.dispatch({
    type:'ADD'
    num: '12'
})
```
`reducer`

`store收到action后，给出一个新的state，产生这个新的state的过程就叫做reducer`

`reducer是个函数，接收两个参数state和actioin，返回一个新的state`
```
const reducer = (state, action) {
    let { type } = action;
    case XXX：
    return steteXXX;
    ...
    default:
    return state;
}
```
`store.subscribe()`

`store.subscribe()方法用来监听store，一旦state发生变化，就自动执行这个函数`
```
function listener(){
    console.log(store.getState())
}
store.subscribe(listener)
```
`解除监听`

```
let unsubscribe = store.subscribr(
    () => console.log(store.getState())
)
unsubscribe();
```
`reducer的拆分`

`对于大型的复杂的项目，reducer函数用来控制多个state，因此reducer函数十分庞大，拆分reducer非常重要`

`redux提供了combineReducers()方法，将多个reducer合并成了reducer`

```
import { combineReducers } from 'redux';
const reducer = combineReducers(
    {
        reducer1,
        reducer2,
        reducer3
    }
)
```
`可以把所有reducer放在一个文件里面，然后统一引入`
```
import { combineReducers } from 'redux';
import * as reducers from './reducers';
const reducer = combineReducers(reducers)
```


