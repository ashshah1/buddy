import React from 'react';

import Task from './Task';
import './TaskList.css'
import { Context } from './Context.js';

import useHabits from './useHabits.js';
import { useContext } from "react"

function TaskList (props) {
    const { user } = useContext(Context);
    

    const habits = useHabits(user.uid)

    let taskArray = [];
    let taskDuration = "";


    if (habits.weekly) {
        taskDuration = "weekly";
    } else {
        taskDuration = "daily";
    }

    for (let i = 0; i < habits.length; i++) {
        let newTask = <Task key={habits[i].name} taskName={habits[i].name} taskDuration={taskDuration} taskFreq={habits[i].frequency} currCount={habits[i].currCounter} totalCount={habits[i].overallCounter} taskCategory={habits[i].category} color={habits[i].color}  whenClicked={props.whenClicked} onUndo={props.onUndo}></Task>
        taskArray.push(newTask);
    }


    return (
        <div className="tasklist-container">
            <div className="header-container">
                <p className="task-header">TASKS</p>
                <p className="task-header">—</p>
            </div>
            {taskArray}
            <button className="add-habit-btn">add a new task</button>

        </div>
    )
}

export default TaskList;