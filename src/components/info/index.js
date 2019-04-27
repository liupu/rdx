import React, { Component } from 'react';

export default class Info extends Component {
    getDone() {
        const { todos } = this.props;
        let count = 0;
        todos.forEach(item=>{
            item.done && count++;
        })
        return count;
    }
    render() {
        const { todos } = this.props;
        return (
            <div>
                <p>总共有{todos.length}个事件需要去做</p>
                <p>已经做完了{this.getDone()}件</p>
                <p>还有{todos.length - this.getDone()}件需要继续做</p>
                <hr/>
                <button onClick={this.props.changerFilter.bind(null,'ALL')}>ALL</button>
                {' '}
                <button onClick={this.props.changerFilter.bind(null,'DONE')}>DONE</button>
                {' '}
                <button onClick={this.props.changerFilter.bind(null,'UNDONE')}>UNDONE</button>
            </div>
        )
    }
}