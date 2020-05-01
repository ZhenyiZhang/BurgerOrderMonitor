import React from 'react';
import Items from "./Items/Items";
import axiosInstance from "../../../Axios/main";
import Css from './Order.css';

const Order = (props) => {
    const confirmHandler = () => {
        axiosInstance.post(`confirmed/${props.orderInfo.orderNumber}`);
    };
    const pickupHandler = () => {
        axiosInstance.post(`pickup/${props.orderInfo.orderNumber}`);
    };
    const cancelHandler = () => {
        axiosInstance.post(`cancel/${props.orderInfo.orderNumber}`);
    };
    const completeHandler = () => {
        axiosInstance.post(`completed/${props.orderInfo.orderNumber}`);
    };
    return(
        <div className={Css.order}>
            <p>Order Status: {props.orderInfo.status}</p>
            <p>Order Number: {props.orderInfo.orderNumber}</p>
            <p>Name: {props.orderInfo.name}</p>
            <p>Phone Number:{props.orderInfo.phone}</p>
            <Items items={props.orderInfo.items}/>
            <p>Total Price: ${props.orderInfo.price}</p>
            <button className={Css.button} onClick={confirmHandler}>Confirm</button>
            <button className={Css.button} onClick={pickupHandler}>Ready</button>
            <button className={Css.button} onClick={completeHandler}>Complete</button>
            <button className={Css.buttonCancel} onClick={cancelHandler}>Cancel</button>
        </div>
    );
};

export default Order;