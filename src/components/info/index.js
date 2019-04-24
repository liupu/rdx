import React, { Component } from 'react';
export default class Info extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>总共有10个事件需要去做</p>
                <p>已经做完了5件</p>
                <p>还有5件需要继续做</p>
            </div>
        )
    }
}