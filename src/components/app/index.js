import React, { Component } from 'react';
import Header from '../header';
import TodoListMain from '../todolist';
import Info from '../info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
class App extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <p>Todo List</p>
                <Header actions={this.props.actions}/>
                <TodoListMain todos={this.props.todos} actions={this.props.actions}/>
                <Info />
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        todos:state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);