import React, { Component } from 'react';

import HomePage from './HomePage.js'
import LogInPage from './LogInPage.js'
import NavBar from './NavBar.js'
import Shop from './Shop.js'
import ProfileView from './ProfileView.js'
import LandingPage from './LandingPage.js'
import AddHabit from "./AddHabit.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { ContextProvider } from "./Context";

// firebase hooks - should make logins easier to work with
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {

  return (
    <ContextProvider>
    <Router>
      <div>
     
        {/* <NavBar /> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>        
          <Route path="/profile">
            <ProfileView />
          </Route>  
          <Route path="/login">
            <LogInPage />
          </Route> 
          <Route path="/add">
            <AddHabit />
          </Route>      
          <Route exact path="/landing">
            <LandingPage />
          </Route> 
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    </ContextProvider>
  );
}

