import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './Component/Navbar';
import ProductsList from './Component/ProductsList';
import Details from './Component/Details';
import Cart from './Component/Cart';
import Default from './Component/Default';
import Modal from './Component/Modal';


class App extends Component {
  render(){
    return (
     <React.Fragment>
       <Navbar/>
       <Switch>
         <Route exact path="/" component={ProductsList}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart" component={Cart}/>
         <Route component={Default}/>
       </Switch>
       <Modal />
     </React.Fragment>
    );
  }
}

export default App;
