import React, { Component } from 'react';

export default class Header extends Component{
    addTodo(){
        this.refs.txt.value ? this.props.actions.addFun(this.refs.txt.value):'';
        this.refs.txt.value='';
    }
    handleKeyDown(event){
        if(event.keyCode===13){
            this.addTodo();
        }
    }
    render(){
        return (
            <div>
                <input type='text' ref='txt' onKeyDown={this.handleKeyDown.bind(this)}/>
                {" "}
                <input type='button' value='添加待做事项' onClick={this.addTodo.bind(this)}/>
            </div>
        )
    }
}
