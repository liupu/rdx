import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import './index.css';


class App extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
       
        return (
            <div>
                Hello world
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state
}
const mapDispatchToProps = (disaptch) => {
    return { actions: bindActionCreators(actions, disaptch) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);