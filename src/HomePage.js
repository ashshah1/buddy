import React from 'react';
import TaskList from './TaskList.js';
import XPBar from './XPBar.js';
import background from './backgrounds/bg-one.png';
import { useState, useEffect } from 'react';

import './HomePage.css'

import { firebase, fireauth } from './firebase.js'

function HomePage() {

// !!! Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  let confirm = "";

  const auth = fireauth;

  const whenSignedIn = document.getElementById('whenSignedIn');
  const whenSignedOut = document.getElementById('whenSignedOut');

  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');

  const userDetails = document.getElementById('userDetails');

  const provider = new firebase.auth.GoogleAuthProvider();


// !!!! Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  // Tester code, if you're logged in the little green button should read "You're logged in", if not, "You need to log in!"

  if (!user) {
    confirm = "You need to log in!"
  } else {
    confirm = "You're logged in!"
  }


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
        <button id="signInBtn" onClick={() => auth.signInWithPopup(provider)}>Sign in with Google</button>
      </section>
      <section id="whenSignedIn">
        <div id="userDetails"></div>
        <button id="signOutBtn" onClick={() => auth.signOut()}>Sign out</button>
      </section>
      <section>
        <h2>My Firestore Things</h2>
        <ul id="thingsList">
        </ul>
        <button id="createThing" className="btn btn-success">{confirm}</button>
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