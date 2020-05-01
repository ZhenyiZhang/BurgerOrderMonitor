import Order from './Order/Order';
import React, {Component} from 'react';
import axiosInstanceMain from '../../Axios/main';
import OrderSelector from "./OrderSelector/OrderSelector";
import Css from './OrderControls.css';

class OrdersControls extends Component{
    state = {
        orders: [],
        orderSelector: 'all'
    };
    componentDidMount() {
        axiosInstanceMain.get().then((result) => {
            this.setState(
                {orders: result.data});
            console.log(this.state.orders);
        });
        let eventSource = new EventSource('http://localhost:3001/events');
        eventSource.onmessage = (msg) => {
            axiosInstanceMain.get().then((result) => {
                this.setState(
                    {orders: result.data});
                console.log(this.state.orders);
            });
            console.log(msg);
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.state !== nextState;
    }

    orderSelectorChangeHandler = (selector) => {
        this.setState({orderSelector: selector})
    };

    render() {
        return(
            <div className={Css.orderPanel}>
                <div className={Css.sideDraw}>
                    <button
                        className={(this.state.orderSelector === 'all')? Css.selectedButton : Css.selectButton}
                        onClick={this.orderSelectorChangeHandler.bind(this,'all')}>All
                    </button>
                    <button
                        className={ (this.state.orderSelector === 'Pending')? Css.selectedButton : Css.selectButton}
                        onClick={this.orderSelectorChangeHandler.bind(this,'Pending')}>Pending
                    </button>
                    <button
                        className={ (this.state.orderSelector === 'Confirmed')? Css.selectedButton : Css.selectButton}
                        onClick={this.orderSelectorChangeHandler.bind(this,'Confirmed')}>Confirmed
                    </button>
                    <button
                        className={ (this.state.orderSelector === 'Canceled')? Css.selectedButton : Css.selectButton}
                        onClick={this.orderSelectorChangeHandler.bind(this,'Canceled')}>Canceled
                    </button>
                    <button
                        className={ (this.state.orderSelector === 'Completed')? Css.selectedButton : Css.selectButton}
                        onClick={this.orderSelectorChangeHandler.bind(this,'Completed')}>Completed
                    </button>
                </div>
                <OrderSelector orders={this.state.orders} selector={this.state.orderSelector}/>
            </div>
        );
    }
}

export default OrdersControls;
