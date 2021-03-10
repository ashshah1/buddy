import { useState, useEffect, useContext } from 'react';
import { firestore, firebase } from './firebase';
import { Context } from "./Context.js";

import './AddHabit.css'

function AddHabit() {
    const { user } = useContext(Context);

    // keep track of all the values being added to the new habit
    const [ name, setName ] = useState("");
    const [ color, setColor ] = useState("");
    const [ category, setCategory ] = useState("");
    const [ frequency, setFrequency ] = useState("");
    const [ counter, setCounter ] = useState(0);
    const [ state, setState ] = useState("SELECT");


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
    }, [ state, name ]);

    // on click mark button as active, disable others?
    // somehow save the text value of that button for both frequency and category and set their states



    return (
        <div>
            <div>
                <h1>hello add a habit here if u want idc</h1>
                <form onSubmit={submitHabit}>
                    <div className="form-group">
                        <label htmlFor="title">Habit Name</label>
                        <input type="text" className="form-control" placeholder="name your habit" value={name} onChange={event => {setName(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group">
                    <label>Frequency</label>
                        <input type="number" className="form-control" placeholder="how often do you want to do this activity? " value={frequency} onChange={event => {setFrequency(event.target.value);
                        }}
                        />
                    </div>
                    <div className="form-group">
                        <h1>what category bois</h1>
                        <div className="radio">
                        </div>
                    </div>
                    <div className="form-group">
                        <h1>what color</h1>
                        <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#F56D32</button>
                        <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#C1F8E4</button>
                        <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#F5BF32</button>
                        <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} type="button">#69AABF</button>
                    </div>
                    <button
                        type="submit" className="btn btn-primary mt-4" disabled={!user}>
                        Create Your Post!
                    </button>
                </form>
            </div>
        </div>

    )
}

export default AddHabit;