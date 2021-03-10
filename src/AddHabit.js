import { useState, useEffect, useContext } from 'react';
import { firestore, firebase } from './firebase';
import { Context } from "./Context.js";

import './AddHabit.css'

function AddHabit() {
    const { user } = useContext(Context);

    // keep track of all the values being added to the new habit
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("");
    const [frequency, setFrequency] = useState("");
    const [counter, setCounter] = useState(0);
    const [state, setState] = useState("SELECT");


    const colors = ["#A9E3EB", "#69AABF", "#C1F8E4", "#ACECB7", "#F5BF32", "#F98A5B", "#C1C6F8", "#C4C4C4"]

    // on submit, the state of the process is updates which will trigger further changes in the effect hook
    const submitHabit = (event) => {
        event.preventDefault();
        setState("FINISH");
    }

    // clears the content on the page once a habit is added
    const resetModal = () => {
        setName("");
        setState("");
    }

    useEffect(() => {
        // creates a new habit object which is then added to the firestore
        const createHabit = async () => {
            const newHabitObj = {
                category: "Mind",
                color: color,
                currCounter: 0,
                daily: true, // todo: update somehow with the buttons
                exp: 10,
                frequency: frequency,
                name: name,
                notes: "",
                overallCounter: 0,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: firestore.collection("users").doc(user.local.uid),
                weekly: false
            };
            await firestore.collection("Habits").add(newHabitObj)
        };
        if (state === "FINISH") {
            createHabit();
            resetModal();
        }
    }, [state, name]);

    // on click mark button as active, disable others?
    // somehow save the text value of that button for both frequency and category and set their states



    return (
        <div>
            <div className="add-habit-container">
                <form className="add-habit-form" onSubmit={submitHabit}>
                    <div className="form-group pb-2">
                        <label htmlFor="title">Name</label>
                        <input type="text" className="form-control habit-name" placeholder="name your habit" value={name} onChange={event => {
                            setName(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group pb-2">
                        <label>Repeat</label>
                        <div className="frequency">
                            <button className="daily-btn">daily</button>
                            <button className="weekly-btn">weekly</button>
                        </div>
                    </div>
                    <div className="form-group pb-2">
                        <label>Goal</label>
                        <input type="number" className="form-control goal" placeholder="1 time a week" value={frequency} onChange={event => {
                            setFrequency(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group pb-2">
                        <label>Select a category</label>
                        <div className="category-type">
                            <button className="filled">mind</button>
                            <button className="not-filled">body</button>
                            <button className="not-filled">life</button>
                            <button className="not-filled">other</button>
                        </div>
                    </div>
                    <div className="form-group pb-2">
                        <label>Select a color</label>
                        <div>
                            {/* <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#F56D32</button>
                            <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#C1F8E4</button>
                            <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#F5BF32</button>
                            <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#69AABF</button> */}
                             {colors.map(circleColor => (
                                <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} style={{backgroundColor : circleColor}} type="button">{circleColor}</button>
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit" className="btn mt-4 add-btn" disabled={!user}>
                        Create Your Post!
                    </button>
                </form>
            </div>
        </div>

    )
}

export default AddHabit;