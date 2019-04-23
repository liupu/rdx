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
        const { name, price, amount } = this.props.item;
        return (
            <div>
                <p>
                    <input type="button" value='---' onClick = {this.props.actions.minusFun.bind(this,this.props.index)}/>
                    <input type="value" value={amount} />
                    <input type="button" value="+++" onClick = {this.props.actions.addFun.bind(this,this.props.index)}/>
                </p>
                <p>{name}</p>
                <p>单价：{price}</p>
                <p>数量：{amount}</p>
                <p>小计：{price * amount}</p>
               <hr/>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartBar);