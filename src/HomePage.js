import { Context } from "./Context";
import React, { useState, useContext } from "react";
import { firebase, fireauth } from "./firebase";
import background from "./images/bg-one.png";

import TaskList from "./TaskList.js";
import LogInPage from "./LogInPage.js";
import XPBar from "./XPBar.js";
import NavBar from "./NavBar.js";

import "./HomePage.css";

function HomePage() {


  // tester tasks, should be replaced with data from the user once they log in
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
        // updates the data when marked as complete (toggle complete and increment completion count)
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


  // if user is logged in, displays their Home Page with tasks and avatar. if user is not logged in, displays log in page
  if (user) {
    return (
      <main>
        <NavBar></NavBar>
        <img className="background" src={background}></img>
        <button className="sign-in btn btn-outline-dark" onClick={() => fireauth.signOut()}>Log Out</button>
        <div className="content-containers">
        <TaskList tasks={tasks} whenClicked={toggleComplete}></TaskList>
        <XPBar level="4" currXP="45" totalXP="100"></XPBar>
      </div>
      </main>
    )
  } else {
    return(
      <div>
        <LogInPage>
            {/* <p>User exp: {user.exp}</p>
            <p>User level: {user.level}</p> */}
        </LogInPage>
      </div>
    )
  }
};

export default HomePage;
