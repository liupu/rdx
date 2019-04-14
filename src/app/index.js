import React, { Component } from 'react';

export default class App extends Component {
    addAsInputNum(){
        const number = Number(this.refs.inputNum.value);
        this.props.addAsInputNum(number);
        this.refs.inputNum.value = '';
    }
    render() {
        return (
            <div>
                <p>{this.props.value}</p>
                <button onClick = {this.props.addFun}>++</button>
                {` `}
                <button onClick = {this.props.minusFun}>--</button>
                {` `}
                <input type='text' placeholder='Please input a number' ref='inputNum'/>
                {` `}
                <button onClick={this.addAsInputNum.bind(this)}>add the number in the input box</button>
            </div>
        )
    }
}