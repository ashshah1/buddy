import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import './Task.css';

function Task(props) {

    const [isShown, setIsShown] = useState(false); // keeps track of wehther complete buttons are visible

    let currProgress = (props.currCount/props.taskFreq) * 100 + "%";
    const progressStyle = {
        width: currProgress,
        backgroundColor: props.color
    };

    let decor = "";
    if (props.complete === true) {
        decor = "line-through";
    }

    // sets default view, tasks are visible and mark as complete buttons are hidden
    let taskView = "";
    let markBtn = "hidden";

    const handleClick = (event) => {
        props.whenClicked(props.taskName)
    }

    const handleUndo = (event) => {
        props.onUndo(props.taskName);
    }

    // on hover markBtn should be visible and taskView should be hidden
    const toggleView = () => {
        setIsShown(true);
    }

    const toggleBack = () => {
        setIsShown(false);
    }

    // on hover, set classNames to show mark complete buttons
    if (isShown) {
        taskView = "hidden";
        markBtn = "";
    }


    return (<div className="task-container" onMouseEnter={toggleView} onMouseLeave={toggleBack}>
        <div className="curr-progress" style={progressStyle}>
            &nbsp;
        </div>
        <div id="padding-div">
            <div className="container-one pt">
                <p className={taskView} style={{textDecoration: decor}}>{props.taskName}</p>
                <Button onClick={handleClick} className={"btn btn-info " + markBtn}>mark complete</Button>
                <Button onClick={handleUndo} className={"btn btn-secondary " + markBtn}>undo</Button>
                <p id="dot-dot-dot" className={markBtn}>dot</p>
            </div>
            <div className="container-two">
                <p>
                    <span className={taskView}>{props.taskDuration} &nbsp;</span>
                    <span className={taskView}>{props.currCount} {" / "}</span><span className={taskView}>{props.taskFreq}</span>
                </p>
                <p>{props.totalCount} total</p>
            </div>
        </div>
    </div>);
 }

export default Task;