import React from 'react';
import TaskList from './TaskList.js';
import XPBar from './XPBar.js';
import background from './backgrounds/bg-one.png';

import firebase from './firebase.js'

import './HomePage.css'

function HomePage() {

  // new code here

  const auth = firebase.auth();

  const whenSignedIn = document.getElementById('whenSignedIn');
  const whenSignedOut = document.getElementById('whenSignedOut');

  const signInBtn = document.getElementById('signInBtn');
  const signOutBtn = document.getElementById('signOutBtn');

  const userDetails = document.getElementById('userDetails');


  const provider = new firebase.auth.GoogleAuthProvider();

  signInBtn.onclick = () => auth.signInWithPopup(provider);

  signOutBtn.onclick = () => auth.signOut();

  auth.onAuthStateChanged(user => {
    if (user) {
      // signed in
      whenSignedIn.hidden = false;
      whenSignedOut.hidden = true;
      userDetails.innerHTML = `<h3>Hello ${user.displayName}!</h3> <p>User ID: ${user.uid}</p>`;
    } else {
      // not signed in
      whenSignedIn.hidden = true;
      whenSignedOut.hidden = false;
      userDetails.innerHTML = '';
    }
  });

  const db = firebase.firestore();

  const createThing = document.getElementById('createThing');
  const thingsList = document.getElementById('thingsList');
  
  
  let thingsRef;
  let unsubscribe;

  auth.onAuthStateChanged(user => {

    if (user) {

      // Database Reference
      thingsRef = db.collection('things')

      createThing.onclick = () => {

        const { serverTimestamp } = firebase.firestore.FieldValue;

        thingsRef.add({
          uid: user.uid,
          name: faker.commerce.productName(),
          createdAt: serverTimestamp()
        });
      }


      // Query
      unsubscribe = thingsRef
        .where('uid', '==', user.uid)
        .orderBy('createdAt') // Requires a query
        .onSnapshot(querySnapshot => {

          // Map results to an array of li elements

          const items = querySnapshot.docs.map(doc => {

            return `<li>${doc.data().name}</li>`

          });

          thingsList.innerHTML = items.join('');

        });



    } else {
      // Unsubscribe when the user signs out
      unsubscribe && unsubscribe();
    }
  });
  
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
        <button id="createThing" class="btn btn-success">Create Random Thing</button>
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