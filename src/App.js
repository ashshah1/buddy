import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Task from './Task.js';
import TaskList from './TaskList.js';
import ProgressBar from './XPBar.js';
import HomePage from './HomePage.js'
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
     
        <nav>
          <ul className="nav-container">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop" component={Shop} />          
          <Route path="/profile" component={ProfileView}/>          
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
    </ContextProvider>
  );
}

