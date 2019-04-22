import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../actions';
// import { bindActionCreators } from 'redux';
import './index.css';
import CartBar from '../cartBar';


class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { cart } = this.props;
        const CarList = cart.map((item, index) => {
            return <CartBar key={index} index={index} item={item} />
        })
        return (

            <div>
                { CarList }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state;
}
// const mapDispatchToProps = (disaptch) => {
//     return { actions: bindActionCreators(actions, disaptch) }
// }
export default connect(mapStateToProps, null)(App);