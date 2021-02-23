import React from 'react';

import Task from './Task';
import './TaskList.css'


function TaskList ({tasks}) {
    let taskArray = [];

    for (let i = 0; i < tasks.length; i++) {
        let newTask = <Task taskName={tasks[i].taskName} taskDuration={tasks[i].taskDuration} taskFreq={tasks[i].taskFreq} currCount={tasks[i].currCount} totalCount={tasks[i].totalCount} taskCategory={tasks[i].taskCategory}></Task>
        taskArray.push(newTask);
    }

    return (
        <div className="tasklist-container">
            {taskArray}
        </div>
    )
}

export default TaskList;