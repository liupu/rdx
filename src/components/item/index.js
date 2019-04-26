import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    constructor(props){
        super(props)
        console.log("props::::",props)
       // console.log(this.props.item)
    }
    handleCheck(id){
        this.props.actions.checkFun(id);
    }
    handleRemove(id){
        this.props.actions.removeFun(id);
    }

    
    render() {
         return (
            <div>
                <input type='checkbox' checked={this.props.item.done} onChange={this.handleCheck.bind(this, this.props.item.id)} />
                {' '}
                <span>{this.props.item.text}</span>
                {' '}
                <input type='button' value='delete' onClick={this.handleRemove.bind(this, this.props.item.id)} />
            </div>
        )
    }
}