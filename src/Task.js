import React from 'react';


import './Task.css';

function Task({taskName, taskDuration, taskFreq, currCount, totalCount, taskCategory}) {
   return (<div className="task-container">
       <progress value={currCount} max={taskFreq}>
       </progress>
       <p id="dot-dot-dot">dot</p>
       <p>{taskName}</p>
       <p>{taskDuration}</p>
       <p>{taskFreq}</p>
       <p>{currCount}</p>
       <p>{totalCount}</p>
       <p>{taskCategory}</p>
   </div>);
}

export default Task;


