import React, {useState} from 'react';
import Task from './Task';
import './TaskList.css'

import { Context } from './Context.js';

import useHabits from './useHabits.js';
import { useContext } from "react"

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function TaskList (props) {
    const { user } = useContext(Context);
    const habits = useHabits(user.uid)
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let tasks = props.tasks;
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
            <button className="add-habit-btn" onClick={handleShow}>+ add a new task</button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD HABIT</Modal.Title>
                </Modal.Header>
                <Modal.Body><p>help</p></Modal.Body>
            </Modal>
        </div>
    )
}

export default TaskList;