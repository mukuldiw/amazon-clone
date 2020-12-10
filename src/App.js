// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router, Switch,Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
const  [{}, dispatch] = useStateValue();

  
    //listener for login ll run once loads
    useEffect(() => {
      
      auth.onAuthStateChanged(authUser => {
        console.log('User is:',authUser);
        
        if(authUser){
          //user is logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })

        } else{
          //user is logged out
          dispatch({
            type: 'SET_USER',
            user: null
          })
        }
      })
      
    }, [])
    return (
      <Router>
        <div className="App">
          
          <Switch>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Header />
              <Home />
            </Route>
          </Switch>
        </div>
        </Router>
    );
  }

export default App;
