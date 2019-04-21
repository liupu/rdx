
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import './index.css';


class App extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        const { r, g, b } = this.props;
        const { changeR, changeG, changeB } = this.props.actions;
        return (
            <div>
                <div className='box' style={{ "backgroundColor": `rgb(${r},${g},${b})` }}>
                    {r},{g},{b}
                </div>
                <button onClick={changeR}>点击我改变R的值</button>
                <br />
                <button onClick={changeG}>点击我改变G的值</button>
                <br />
                <button onClick={changeB}>点击我改变B的值</button>
                {/* <div className='container'>
                    <input type='number' /> 
                    <input type='range' />
                    <input type='number' />
                </div> */}
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