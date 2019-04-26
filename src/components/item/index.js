import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onEdit: false
        }
    }
    handleContent(){
        const contentTxt = this.refs.contentTxt.value;
        this.setState({ onEdit: false });
        contentTxt ? this.props.actions.changeItem(this.props.item.id, contentTxt) : ''
    }
    handleBlur() {
        this.handleContent();
    }
    handleKeyDown(event) {
        if(event.keyCode === 13){
            this.handleContent();
        }
    }
    getContent() {
        if (this.state.onEdit) {
            return (<input ref='contentTxt'
                type='text'
                autoFocus
                onBlur={this.handleBlur.bind(this)}
                onKeyDown={this.handleKeyDown.bind(this)}
            />)
        } else {
            return <span>{this.props.item.text}</span>
        }
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