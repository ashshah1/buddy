import React from 'react';


import './Task.css';

function Task(props) {
    return (<div className="task-container">
        <div className="curr-progress" style={{width: "20%", height:"5rem"}}>
            &nbsp;
        </div>
        <div className="container-one">
            <p id="dot-dot-dot">dot</p>
            <p>{props.taskName}</p>
        </div>
        <div className="container-two">
            <p>{props.taskDuration}</p>
            <p>{props.taskFreq}</p>
            <p>{props.currCount}</p>
            <p>{props.totalCount}</p>
        </div>
    </div>);
 }

export default Task;


