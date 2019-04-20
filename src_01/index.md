#### redux
`reducer函数`
```
(state,action) =>{
    const { type } = action;
    switch(type){
        case 'XXX':
        return xxx;
        ...
        default:
        return state;
    }
}
```
`创建store`
```
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);
```
`获得state(store某一时刻的值)`
```
store.getState()
```
`通过发起action，进行对store的更改`
```
store.dispatch({type:'XXX'})
```
`订阅store的改变`
```
store.subscribe()
```