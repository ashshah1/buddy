import React from 'react';
import TaskList from './TaskList.js';
import ProgressBar from './ProgressBar.js';

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
      <TaskList tasks={taskTest}></TaskList>
      <ProgressBar level="4" currXP="45" totalXP="100"></ProgressBar>
      </div>
    );

  }

export default HomePage;