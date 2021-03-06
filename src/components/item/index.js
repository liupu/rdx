import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onEdit: false
        }
    }
    handleContent() {
        this.setState({ onEdit: false });
        this.refs.contentTxt.value ?
            this.props.actions.changeItem(this.props.item.id, this.refs.contentTxt.value) : ''
    }
    handleBlur() {
        this.handleContent();
    }
    handleKeyDown(event) {
        if (event.keyCode === 13) {
            this.handleContent();
        }
    }
    getContent() {
        return this.state.onEdit ? (<input ref='contentTxt'
            type='text'
            autoFocus
            onBlur={this.handleBlur.bind(this)}
            onKeyDown={this.handleKeyDown.bind(this)}
        />) : <span>{this.props.item.text}</span>
    }
    handleCheck(id) {
        this.props.actions.checkFun(id);
    }
    handleRemove(id) {
        this.props.actions.removeFun(id);
    }
    handleDbClick() {
        this.setState({
            onEdit: !this.state.onEdit
        })
    }
    render() {
        const { item } = this.props;
        return (
            <div>
                <input type='checkbox' checked={item.done} onChange={this.handleCheck.bind(this, item.id)} />
                {' '}
                <span onDoubleClick={this.handleDbClick.bind(this)}>{this.getContent()}</span>
                {' '}
                <input type='button' value='delete' onClick={this.handleRemove.bind(this, item.id)} />
            </div>
        )
    }
}