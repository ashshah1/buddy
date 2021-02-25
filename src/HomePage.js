import React from 'react';
import TaskList from './TaskList.js';
import XPBar from './XPBar.js';
import background from './backgrounds/bg-one.png';

import './HomePage.css'

import { firebase, fireauth } from './firebase.js'

function HomePage() {

  const auth = fireauth;

  const whenSignedIn = document.getElementById('whenSignedIn');
  const whenSignedOut = document.getElementById('whenSignedOut');

  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');

  const userDetails = document.getElementById('userDetails');

  const provider = new firebase.auth.GoogleAuthProvider();

  // new code here
  signInBtn.onclick = () => auth.signInWithPopup(provider);

  signOutBtn.onclick = () => auth.signOut();
  
  
  // ends here

  const taskTest = [
    {
    "taskName": "testing1",
    "taskDuration": "weekly",
    "taskFreq": 3,
    "currCount": 1,
    "totalCount": 12,
    "taskCategory": "mind"
    },
    {
      "taskName": "testing2",
      "taskDuration": "daily",
      "taskFreq": 3,
      "currCount": 1,
      "totalCount": 12,
      "taskCategory": "body"
      }
]


  return (
      <div>
      <section id="whenSignedOut">
        <button id="signInBtn">Sign in with Google</button>
      </section>
      <section id="whenSignedIn" hidden="true">
        <div id="userDetails"></div>
        <button id="signOutBtn">Sign out</button>
      </section>
      <section>
        <h2>My Firestore Things</h2>
        <ul id="thingsList">
        </ul>
        <button id="createThing" className="btn btn-success">Create Random Thing</button>
      </section>
      <img className="background" src={background}></img>
      <div className="content-containers">
        <TaskList tasks={taskTest}></TaskList>
        <XPBar level="4" currXP="45" totalXP="100"></XPBar>
      </div>
      </div>
    );

  }

export default HomePage;