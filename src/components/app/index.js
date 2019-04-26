import React, { Component } from 'react';
import Header from '../header';
import TodoListMain from '../todolist';
import Info from '../info';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';

class App extends Component {
    render() {
        const { actions, todos } = this.props;
        return (
            <div>
                <p>Todo List</p>
                <Header actions={actions} />
                <TodoListMain todos={todos} actions={actions} />
                <Info todos={todos} />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        todos: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);