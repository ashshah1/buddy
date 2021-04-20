import React, { useState, useContext } from 'react';
import Task from './Task';
import './TaskList.css'
import { Context } from './Context.js';
import useHabits from './useHabits.js';
import { firebase, firestore } from './firebase';
import Modal from 'react-bootstrap/Modal';
import AddHabit from './AddHabit';
import useWindowDimensions from './windowDimensions.js';

function TaskList () {
    const { user } = useContext(Context);
    const habits = useHabits(user.uid)

    const { height, width } = useWindowDimensions();
    
    const [hidden, setHidden] = useState( width > 768 ? "": "hidden");
    const [show, setShow] = useState(false); // keeps track of addhabit modal visibility
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let taskArray = [];
    let taskDuration = "";


    // turning boolean into a displayable sring
    if (habits.weekly) {
        taskDuration = "weekly";
    } else {
        taskDuration = "daily";
    }


    // updates data in the backend when users marks a habit as complete
    // queries both the user and habit information, increment their current counter and total count
    // also adds both points and exp which are instantly reflected
    const toggleComplete = async (user, habit) => {
        const habitRef = firestore.collection("Habits").doc(habit.id);
        const userRef = firestore.collection("users").doc(user.local.uid);
        if (habit.currCounter == habit.frequency) {
            await habitRef.update({
                currCounter: 1, // if task progress bar is full, resets to 1
                overallCounter: firebase.firestore.FieldValue.increment(1)
            });
        } else if (user.exp >= 100) {
            console.log(user.exp);
            await userRef.update({
                exp: 1, // if task progress bar is full, resets to 1
                level: firebase.firestore.FieldValue.increment(1)
            });
        } else {
            await habitRef.update({
                currCounter: firebase.firestore.FieldValue.increment(1),
                overallCounter: firebase.firestore.FieldValue.increment(1),
                points: firebase.firestore.FieldValue.increment(20),
                exp: firebase.firestore.FieldValue.increment(2)
            });
        }
        await userRef.update({
            points: firebase.firestore.FieldValue.increment(20),
            exp: firebase.firestore.FieldValue.increment(2)
        })
    }

    // similarly, updates backend when users undoes a task, decrementing both counters and points
    const toggleUndo = async (user, habit) => {
        console.log("undo");
        const habitRef = firestore.collection("Habits").doc(habit.id);
        const userRef = firestore.collection("users").doc(user.local.uid);
        await habitRef.update({
            currCounter: firebase.firestore.FieldValue.increment(-1),
            overallCounter: firebase.firestore.FieldValue.increment(-1)
        }); 
        await userRef.update({
            points: firebase.firestore.FieldValue.increment(-20),
            exp: firebase.firestore.FieldValue.increment(-2)
        })
    }


    const toggleHidden = () => {
        if (hidden == "") {
         setHidden("hidden");
        } else {
            setHidden("")
        }
    }

    for (let i = 0; i < habits.length; i++) {
        let newTask = <Task key={habits[i].name} id={habits[i].id} taskName={habits[i].name} taskDuration={taskDuration} taskFreq={habits[i].frequency} currCount={habits[i].currCounter} totalCount={habits[i].overallCounter} taskCategory={habits[i].category} color={habits[i].color}  whenClicked={() => toggleComplete(user, habits[i])} onUndo={() => toggleUndo(user, habits[i])}></Task>
        taskArray.push(newTask);
    }

    return (
        <div className="tasklist-container">
            <div className="header-container">
                <p className="task-header">HABITS</p>
                <p className="task-header" style={{ cursor: 'pointer'}} onClick={toggleHidden}>—</p>
            </div>
            <div className={hidden} id="taskArrayContainer">
            {taskArray}
            <button className="add-habit-btn" onClick={handleShow}>+ add a new task</button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>ADD HABIT</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddHabit></AddHabit></Modal.Body>
            </Modal>
            </div>
        </div>
    )
}

export default TaskList;