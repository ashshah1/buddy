import React from 'react';

import Task from './Task';
import './TaskList.css'
import { firestore } from "./firebase"
import { Context } from './Context.js';

import { useState, useEffect, useContext } from "react"

const useHabits = userID => {
    const [habits, setHabits] = useState([]);

    useEffect(() => {
        let query = firestore.collection("Habits")

        if (userID) {
            query = query.where(
                "user",
                "==",
                firestore.collection("users").doc(userID)
            )
        }

        const unsubscribe = query
            .onSnapshot(snapshot => {
                let newHabits = [];
                snapshot.forEach(habit => {
                    newHabits.push({ id: habit.id, ...habit.data() })
                })
                setHabits(newHabits);
            })
        return unsubscribe;
    }, [userID]);
    return habits;
}

function TaskList (props) {
    const { user } = useContext(Context);

    const habits = useHabits(user.uid)
    console.log(habits);
    console.log(habits[1].name);


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


    // for (let i = 0; i < tasks.length; i++) {
    //     let newTask = <Task key={tasks[i].taskName} taskName={tasks[i].taskName} taskDuration={tasks[i].taskDuration} taskFreq={tasks[i].taskFreq} currCount={tasks[i].currCount} totalCount={tasks[i].totalCount} taskCategory={tasks[i].taskCategory} color={tasks[i].color} complete={tasks[i].complete} whenClicked={props.whenClicked} onUndo={props.onUndo}></Task>
    //     taskArray.push(newTask);
    // }

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