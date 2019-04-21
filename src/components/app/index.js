import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import './index.css';


class App extends Component {
    constructor(props) {
        super(props)
        //console.log(props)
    }
    // componentDidMount(){
    //     alert('1')
    //     const inputNum = this.refs.inputNum.value;
    //     this.props.actions.changeR(inputNum);
    // }
    handleChange(){
        //console.log('123')
        //const inputNum = this.refs.inputNum.value;
        const inputNum = 1;
        //console.log(inputNum);
        this.props.actions.change(inputNum,"r");
    }
    render() {
        const { r, g, b } = this.props;
       // const { changeR, changeG, changeB } = this.props.actions;
        return (
            <div>
                <div className='box' style={{ "backgroundColor": `rgb(${r},${g},${b})` }}>
                    {r},{g},{b}
                </div>
                <div className='container'>
                    <input type='number' /> 
                    <input type='range' onChange={this.handleChange.bind(this)}/>
                    <input type='number' ref='inputNum'/>
                </div>
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