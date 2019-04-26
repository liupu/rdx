import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    constructor(props){
        super(props)
    }
    handleCheck(id){
        this.props.actions.checkFun(id);
    }
    handleRemove(id){
        this.props.actions.removeFun(id);
    }
    render() {
        const { item } = this.props;
         return (
            <div>
                <input type='checkbox' checked={item.done} onChange={this.handleCheck.bind(this, item.id)} />
                {' '}
                <span>{item.text}</span>
                {' '}
                <input type='button' value='delete' onClick={this.handleRemove.bind(this, item.id)} />
            </div>
        )
    }
}