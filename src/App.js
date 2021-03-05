import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

<<<<<<< Updated upstream
import Task from './Task.js';
import TaskList from './TaskList.js';
import ProgressBar from './XPBar.js';
import HomePage from './HomePage.js'
=======
import HomePage from './HomePage.js';
import Shop from './Shop.js';
import ProfileView from './ProfileView.js';
import SignIn from './SignIn.js';
import LandingPage from './LandingPage.js';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
     
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
=======
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/shop" component={Shop} />          
          <Route path="/profile" component={ProfileView}/>     
          <Route path="/home" component={HomePage}/>
          <Route exact path="/signin" component={SignIn} />          
          <Route exact path="/" component={LandingPage} />
>>>>>>> Stashed changes
        </Switch>
      </div>
    </Router>
    </ContextProvider>
  );
}

function Home() {
  return <HomePage></HomePage>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

