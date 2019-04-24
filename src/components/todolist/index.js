import React, { Component } from 'react';
import './index.css';
class TodoListMain extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    handleCheck(id){
        this.props.actions.checkFun(id);
    }
    handleRemove(id){
        this.props.actions.removeFun(id);
    }
    render() {
        return (
            <ul>
                {this.props.todos.map((item, index) => {
                    const id = item.id;
                    return (<li key={index}>
                        <input type='checkbox' checked={item.done} onChange={this.handleCheck.bind(this,id)}/>
                        {' '}
                        <span>{item.text}</span>
                        {' '}
                        <input type='button' value='delete' onClick={this.handleRemove.bind(this,id)}/>
                    </li>)
                })}
            </ul>
        )
    }
}

export default TodoListMain;