import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class App extends Component {
    constructor(props){
        super(props);
        console.log(props)
    }
    
    addAsInputNum(){
        const number = Number(this.refs.inputNum.value);
        this.props.actions.addAsInputNum(number);
        this.refs.inputNum.value = '';
    }
    render() {
        const { addFun , minusFun } = this.props.actions;
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick = { addFun }>++</button>
                {` `}
                <button onClick = { minusFun }>--</button>
                {` `}
                <input type='text' placeholder='Please input a number' ref='inputNum'/>
                {` `}
                <button onClick={this.addAsInputNum.bind(this)}>add the number in the input box</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return {actions:bindActionCreators(actions,dispatch)}
}
// export default connect(
//     (state) => {
//         return state;
//     },
//     (dispatch) => {
//         return {
//             actions:bindActionCreators(actions,dispatch)
//         }
//     }
// )(App)
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)