import React, { useState } from 'react';


import './Task.css';

function Task(props) {
    let currProgress = (props.currCount/props.taskFreq) * 100 + "%";
    const progressStyle = {
        width: currProgress,
        backgroundColor: props.color
    };

    let decor = "";
    if (props.complete === true) {
        decor = "line-through";
    }

    const handleClick = (event) => {
        props.whenClicked(props.taskName)
    }

    return (<div className="task-container">
        <div className="curr-progress" style={progressStyle}>
            &nbsp;
        </div>
        <div id="padding-div">
            <div className="container-one">
                <p style={{textDecoration: decor}} onClick={handleClick}>{props.taskName}</p>
                <p id="dot-dot-dot">dot</p>
            </div>
            <div className="container-two">
                <p>
                    <a>{props.taskDuration}  &nbsp;</a>
                    <a>{props.currCount} {" / "}</a><a>{props.taskFreq}</a>
                </p>
                <p>{props.totalCount}</p>
            </div>
        </div>
    </div>);
 }

export default Task;