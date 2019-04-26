import React, { Component } from 'react';
import './index.css';

export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            onEdit: false
        }
    }
    getContent(){
        if(this.state.onEdit){
            return<input type='text'/>
        }else{
            return <span>{this.props.item.text}</span>
        }
        // this.setState({
        //     onEdit:!this.state.onEdit
        // })
    }
    handleCheck(id){
        this.props.actions.checkFun(id);
    }
    handleRemove(id){
        this.props.actions.removeFun(id);
    }
    handleDbClick(){
        this.setState({
            onEdit:!this.state.onEdit
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