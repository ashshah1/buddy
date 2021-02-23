import React from 'react';
import TaskList from './TaskList.js';
import XPBar from './XPBar.js';
import background from './backgrounds/bg-one.png';

import './HomePage.css'

function HomePage() {
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
      <img className="background" src={background}></img>
      <div className="content-containers">
        <TaskList tasks={taskTest}></TaskList>
        <XPBar level="4" currXP="45" totalXP="100"></XPBar>
      </div>
      </div>
    );

  }

export default HomePage;