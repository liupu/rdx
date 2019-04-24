import React, { Component } from 'react';
export default class Info extends Component{
    constructor(props){
        super(props)
        console.log("props",props)
    }
    getDone(){
        var  count = 0;
        for(var i =0; i< this.props.todos.length;i++){
            if(this.props.todos[i].done === true){
                count++
            }
        }
        return count;
    }
    render(){
        return(
            <div>
                <p>总共有{this.props.todos.length}个事件需要去做</p>
                <p>已经做完了{this.getDone()}件</p>
                <p>还有{this.props.todos.length-this.getDone()}件需要继续做</p>
            </div>
        )
    }
}