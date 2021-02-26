import React from 'react';


import './Task.css';

function Task(props) {
    let currProgress = (props.currCount/props.taskFreq) * 100 + "%";
    return (<div className="task-container">
        <div className="curr-progress" style={{width: currProgress}}>
            &nbsp;
        </div>
        <div id="padding-div">
            <div className="container-one">
                <p id="dot-dot-dot">dot</p>
                <p>{props.taskName}</p>
            </div>
            <div className="container-two">
                <p>
                    <a>{props.taskDuration}  &nbsp;</a>
                    <a><a>{props.currCount} {" / "}</a><a>{props.taskFreq}</a></a>
                </p>
                <p>{props.totalCount}</p>
            </div>
        </div>
    </div>);
 }

export default Task;