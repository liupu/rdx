import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import './index.css';


class CartBar extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <p>{JSON.stringify(this.props.item)}</p>
                <p>
                    <input type="button" value='---' onClick = {this.props.actions.minusFun.bind(this,this.props.index)}/>
                    <input type="value" value={0}/>
                    <input type="button" value="+++" onClick = {this.props.actions.addFun.bind(this,this.props.index)}/>
                </p>
               
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     return state
// }
const mapDispatchToProps = (disaptch) => {
    return { actions: bindActionCreators(actions, disaptch) }
}
export default connect(null, mapDispatchToProps)(CartBar);