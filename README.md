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
#### react-redux
`react-redux将组件分为两类：UI组件和容器组件`

`UI组件`:

`UI组件自负责UI的呈现，没有状态，所有参数都有this.props提供，不使用redux的api`

`容器组件`:

`容器组件负责数据和业务逻辑，带有内部状态，使用redux的api`

`react-redux的api`

`connect()`

`connect()用于从UI组件生成容器组价`

`connect()方法的作用`：

`将外部的数据即state对象转化为UI组件的参数，使用mapStateToProps函数`

`将用户发出的动作变为action对象，从ui组件传出去，使用mapDispatchToProps函数`

```
import { connect } from 'react-redux';
...
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
```
`App就是UI组件，export出去的就是react-redux通过connect()方法自动生成的容器组件`

`mapStateToProps()`



`mapStateToProps()执行后返回一个对象`

`mapStateToProps函数时`*connect()*`的第一个参数mapStateToProps函数，用来建立一个从state对象到props对象的映射关系`

`mapStateToProps函数会订阅`*store*`每当state更新的时候，就会自动执行，重新计算UI组件的参数，从而触发UI组件的重新渲染`

`mapStateToProps函数的第一个参数总是state对象，还可以使用第二个参数，代表容器组件的props对象`

`mapDispatchToProps函数是`*connect()*`的第二个参数，用来建立UI组件的actions到store.dispatch方法的映射，定义了哪些用户的操作应该当做Action,传给store`

`在mapDispatchToProps()方法中可以调用bindActionCreators()方法将actions和dispatch进行绑定`
```
const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {actions:bindActionCreators(actions,dispatch)}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
```
*简而言之*

*mapStateToProps()（参数是state）是将State对象传给ui组件，使ui组件获得state对象*

*mapDispatchToProps()（参数是dispatch）是将actions对象传递给ui组件，当用户操作view时，可以发送action*

*bindActionCreators()（参数是actions，dispatch）是将actions与store.dispatch()进行绑定，在mapDispatchToProps，返回绑定了store.dispatch()的actions*

*使用react-redux后，不用再手动调用store.getState()、store.dispatch()、store.subscribe()，这些操作由react-redux的Provider组件的属性store={ store }和connect函数的参数mapStateToProps、mapDispatchToProps实现*