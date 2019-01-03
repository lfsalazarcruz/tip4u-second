import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Signup/SignUp';
import Home from './components/Home/Home';
import UserView from './components/UserView/UserView';
import TransferMoney from './components/UserView/TransferMoney/TransferMoney';
import TransferVerification from './components/UserView/TransferVerification/TransferVerification';
import SendPayment from './components/UserView/SendPayment/SendPayment';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={ Home }/>
          <Route path="/signin" component={ SignIn } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/userview" component={ UserView } />
          <Route path="/transfer" component={ TransferMoney } />
          <Route path="/verification" component={ TransferVerification } />
          <Route path="/send" component={ SendPayment } />
        </div>
      </Router>
    );
  }
}

export default App;
