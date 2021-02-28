import React from 'react';

import Task from './Task';
import './TaskList.css'


function TaskList (props) {
    let tasks = props.tasks;
    let taskArray = [];

    for (let i = 0; i < tasks.length; i++) {
        let newTask = <Task key={tasks[i].taskName} taskName={tasks[i].taskName} taskDuration={tasks[i].taskDuration} taskFreq={tasks[i].taskFreq} currCount={tasks[i].currCount} totalCount={tasks[i].totalCount} taskCategory={tasks[i].taskCategory} color={tasks[i].color} complete={tasks[i].complete} whenClicked={props.whenClicked}></Task>
        taskArray.push(newTask);
    }

    return (
        <div className="tasklist-container">
            <div className="header-container">
                <p className="task-header">TASKS</p>
                <p className="task-header">—</p>
            </div>
            {taskArray}
        </div>
    )
}

export default TaskList;