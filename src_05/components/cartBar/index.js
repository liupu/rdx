import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';
import './index.css';


class CartBar extends Component {
    constructor(props) {
        super(props)
    }
    handleChange() {
        let editValue = this.refs.txt.value;
        this.props.actions.editFun(editValue,this.props.index)
    }
    handleFocus(){
        this.refs.txt.value = '';
    }
    handleBlur(){
        if(this.refs.txt.value==''){
            this.refs.txt.value=this.props.item.amount;
        }
    }
    render() {
        const { name, price, amount } = this.props.item;
        return (
            <div>
                <p>
                    <input type="button" value='---' onClick={this.props.actions.minusFun.bind(this, this.props.index)} />
                    <input type="text" value={amount}
                        onChange={this.handleChange.bind(this)}
                        ref='txt'
                        onFocus = {this.handleFocus.bind(this)}
                        onBlur = {this.handleBlur.bind(this)}
                    />
                    <input type="button" value="+++" onClick={this.props.actions.addFun.bind(this, this.props.index)} />
                </p>
                <p>{name}</p>
                <p>单价：{price}</p>
                <p>数量：{amount}</p>
                <p>小计：{price * amount}</p>
                <hr />
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