import React, { Component } from 'react';
import './App.css';
import OrdersControls from "./components/orders/OrdersControls";

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrdersControls/>
      </div>
    );
  }
}

export default App;
