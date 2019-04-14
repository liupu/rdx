import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class App extends Component {
    addAsInputNum(){
        const number = Number(this.refs.inputNum.value);
        this.props.actions.addAsInputNum(number);
        this.refs.inputNum.value = '';
    }
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick = {this.props.actions.addFun}>++</button>
                {` `}
                <button onClick = {this.props.actions.minusFun}>--</button>
                {` `}
                <input type='text' placeholder='Please input a number' ref='inputNum'/>
                {` `}
                <button onClick={this.addAsInputNum.bind(this)}>add the number in the input box</button>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return state;
    },
    (dispatch) => {
        return {
            actions:bindActionCreators(actions,dispatch)
        }
    }
)(App)