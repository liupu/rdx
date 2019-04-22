import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';
import CartBar from '../cartBar';


class App extends Component {
    constructor(props) {
        super(props)
    }
    getSum() {
        var sum = 0;
        this.props.cart.forEach(function (item) {
            sum += item.price * item.amount;
        })
        return sum;
    }
    render() {
        const { cart } = this.props;
        const CarList = cart.map((item, index) => {
            return <CartBar key={index} index={index} item={item} />
        })

        return (

            <div>
                <p>购物车</p>
                {CarList}
                <p>总价：{this.getSum()}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, null)(App);