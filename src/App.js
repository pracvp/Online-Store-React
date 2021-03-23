import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart/Cart";
//import Default from "/Components/Default";
//import Modal from './components/Modal';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
       
      </React.Fragment>
    );
  }
}

export default App;