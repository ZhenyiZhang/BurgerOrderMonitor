import React from 'react';
import Order from "../Order/Order";
import Css from './OrderSelector.css';

const OrderSelector = (props) => {
    let items;
    if(props.selector === 'all') {
        items = props.orders.map((element,index) => {
            return (<Order key={element.orderNumber}
                           orderInfo={props.orders[index]}/>);});
    } else {
        let indexArray = [];
        props.orders.forEach((element, index) => {
            if(element.status === props.selector) {indexArray.push(index)}
        });
        items = indexArray.map(index => {
            return(<Order key={props.orders[index].orderNumber}
                          orderInfo={props.orders[index]}/>)
        });
    }
    return(<div className={Css.OrderSelector}>{items}</div>);
};

export default OrderSelector;