import React, { Component } from 'react';

export default class App extends Component {
    addAsInputNum(){
        const number = Number(this.refs.inputNum.value);
        this.props.addAsInputNum(number);
        this.refs.inputNum.value = '';
    }
    render() {
        const { value, addFun, minusFun } = this.props;
        return (
            <div>
                <p>{ value }</p>
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