import { Context } from "./Context";
import React, { useState, useContext } from "react";
import { firebase, fireauth } from "./firebase";
import background from "./backgrounds/bg-one.png";

import TaskList from "./TaskList.js";
import XPBar from "./XPBar.js";

import "./HomePage.css";

function HomePage() {

  // const userID = useLocation().pathname.split("/")[2];
  // const user2 = useUser(userID);
  const taskTest = [
    {
    "taskName": "Tester task #1",
    "taskDuration": "weekly",
    "taskFreq": 4,
    "currCount": 1,
    "totalCount": 12,
    "taskCategory": "mind",
    "color": "#ACE6A1",
    "complete": false
    },
    {
      "taskName": "Tester task #2",
      "taskDuration": "daily",
      "taskFreq": 3,
      "currCount": 1,
      "totalCount": 12,
      "taskCategory": "body",
      "color": "#3D998A",
      "complete": false
      },
    {
      "taskName": "Tester task #3",
      "taskDuration": "daily",
      "taskFreq": 7,
      "currCount": 2,
      "totalCount": 14,
      "taskCategory": "body",
      "color": "#A9E3EB",
      "complete": true
    },
    ]

    const { user } = useContext(Context);
  const [tasks, setTasks] = useState(taskTest)

  const toggleComplete = (taskName) => {
    let updatedArray = tasks.map((aTask) => {
      let taskCopy = {...aTask}
      if (taskCopy.taskName == taskName) {
        // update the data when marked as complete (toggle complete and increment completion count)
        taskCopy.complete = !taskCopy.complete;
        if (taskCopy.complete === true) {
          taskCopy.currCount = taskCopy.currCount + 1;
          taskCopy.totalCount = taskCopy.totalCount + 1;
        } else {
          taskCopy.currCount = taskCopy.currCount - 1;
          taskCopy.totalCount = taskCopy.totalCount - 1;
        }
      }
      return taskCopy;
    })
    setTasks(updatedArray)
  }

  return (
    <main>
      <img className="background" src={background}></img>
      {user ?
        <div>
          <button className="sign-in btn btn-outline-dark" onClick={() => fireauth.signOut()}>Hello {user.displayName}</button>
          {/* <p>User exp: {user.exp}</p>
          <p>User level: {user.level}</p> */}
        </div>
        :
        <button onClick={() => fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>Sign in</button>}
      <div className="content-containers">
        <TaskList tasks={tasks} whenClicked={toggleComplete}></TaskList>
        <XPBar level="4" currXP="45" totalXP="100"></XPBar>
      </div>

    </main>
  );
};

// function HomePage() {
//   const { user } = useContext(Context);
// // !!! Set an initializing state whilst Firebase connects
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   let confirm = "";

//   const auth = fireauth;

//   const whenSignedIn = document.getElementById('whenSignedIn');
//   const whenSignedOut = document.getElementById('whenSignedOut');

//   const signInBtn = document.getElementById('signInBtn');
//   const signOutBtn = document.getElementById('signOutBtn');

//   const userDetails = document.getElementById('userDetails');

//   const provider = new firebase.auth.GoogleAuthProvider();


// // !!!! Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   // Tester code, if you're logged in the little green button should read "You're logged in", if not, "You need to log in!"

//   if (!user) {
//     confirm = "You need to log in!"
//   } else {
//     confirm = "You're logged in!"
//   }


  // const taskTest = [
  //   {
  //   "taskName": "testing1",
  //   "taskDuration": "weekly",
  //   "taskFreq": 3,
  //   "currCount": 1,
  //   "totalCount": 12,
  //   "taskCategory": "mind"
  //   },
  //   {
  //     "taskName": "testing2",
  //     "taskDuration": "daily",
  //     "taskFreq": 3,
  //     "currCount": 1,
  //     "totalCount": 12,
  //     "taskCategory": "body"
  //     }
// ]
//   return (
//       <div>
//       <section id="whenSignedOut">
//         <button id="signInBtn" onClick={() => auth.signInWithPopup(provider)}>Sign in with Google</button>
//       </section>
//       <section id="whenSignedIn">
//         <div id="userDetails"></div>
//         <button id="signOutBtn" onClick={() => auth.signOut()}>Sign out</button>
//       </section>
//       <section>
//         <h2>My Firestore Things</h2>
//         <ul id="thingsList">
//         </ul>
//         <button id="createThing" className="btn btn-success">{confirm}</button>
//       </section>
//       <img className="background" src={background}></img>
      // <div className="content-containers">
      //   <TaskList tasks={taskTest}></TaskList>
      //   <XPBar level="4" currXP="45" totalXP="100"></XPBar>
      // </div>
//       </div>
//     );
//   }

export default HomePage;