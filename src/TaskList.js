import React, {useState} from 'react';
import Task from './Task';
import './TaskList.css'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function TaskList(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            <button className="add-habit-btn" onClick={handleShow}>add a new task</button>


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