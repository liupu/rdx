import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    constructor(props){
        super(props)
        console.log("props::::",props)
       // console.log(this.props.item)
    }
    render() {
         return (
            <div>
                <input type='checkbox' checked={this.props.item.done}/>
                <input type='checkbox' checked={this.props.item.done} onChange={this.handleCheck.bind(this, id)} />
                {' '}
                <span>{this.props.item.text}</span>
                {' '}
                <input type='button' value='delete' onClick={this.handleRemove.bind(this, id)} />
            </div>
        )
    }
}