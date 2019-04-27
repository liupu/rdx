import React, { Component } from 'react';
import Item from '../item';
import Info from '../info';
import './index.css';

export default class TodoListMain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filter: 'ALL'
        }
    }
    changerFilter(txt) {
        this.setState({
            filter: txt
        })
    }
    render() {
        const { todos, actions } = this.props;
        const filterTodos = (function () {
            switch (this.state.filter) {
                case 'ALL':
                    return todos;
                case 'DONE':
                    return todos.filter(function (item) {
                        return item.done
                    });
                case 'UNDONE':
                    return todos.filter(function (item) {
                        return !item.done
                    });
            }
        }).call(this); 
        return(
            <div>
                <ul>
                    {filterTodos.map((item , index)=>{        
                    return <Item key={index} item={item} actions={actions} />
                    })}
                </ul>
                <Info todos={todos} changerFilter={this.changerFilter.bind(this)}/>
            </div>
            
        )
    }
}