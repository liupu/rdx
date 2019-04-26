import React, { Component } from 'react';
import Item from '../item';
import './index.css';

export default class TodoListMain extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { todos, actions } = this.props;
        return (
            <ul>
                {todos.map((item, index) => {
                    return <Item key={index} item={item} actions={actions} />
                })}
            </ul>
        )
    }
}