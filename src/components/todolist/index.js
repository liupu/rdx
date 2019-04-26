import React, { Component } from 'react';
import Item from '../item';
import './index.css';
class TodoListMain extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul>
                {this.props.todos.map((item, index) => {
                    //const id = item.id;
                    return <Item key={index} item= {item} actions={this.props.actions}/>
                        {/* <input type='checkbox' checked={item.done} onChange={this.handleCheck.bind(this,id)}/>
                        {' '}
                        <span>{item.text}</span>
                        {' '}
                        <input type='button' value='delete' onClick={this.handleRemove.bind(this,id)}/> */}
                })}
            </ul>
        )
    }
}

export default TodoListMain;