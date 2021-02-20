import React from 'react';


import './Task.css';

function Task(props) {
    return (<div className="task-container">
        <progress value={props.currCount} max={props.taskFreq}>
        </progress>
        <p id="dot-dot-dot">dot</p>
        <p>{props.taskName}</p>
        <p>{props.taskDuration}</p>
        <p>{props.taskFreq}</p>
        <p>{props.currCount}</p>
        <p>{props.totalCount}</p>
        <p>{props.taskCategory}</p>
    </div>);
 }

export default Task;


