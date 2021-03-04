import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import HomePage from './HomePage.js'
import NavBar from './NavBar.js'
import Shop from './Shop.js'
import ProfileView from './ProfileView.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import firebase from './firebase.js';

import { ContextProvider } from "./Context";

// firebase hooks - should make logins easier to work with
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {

  return (
    <ContextProvider>
    <Router>
      <div>
     
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop" component={Shop} />          
          <Route path="/profile" component={ProfileView}/>          
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
    </ContextProvider>
  );
}

