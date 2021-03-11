import { useState, useEffect, useContext } from 'react';
import { firestore, firebase } from './firebase';
import { Context } from "./Context.js";

import './AddHabit.css'

function AddHabit() {
    const { user } = useContext(Context);

    // keep track of all the values being added to the new habit
    const [name, setName] = useState("");
    const [color, setColor] = useState("");
    const [category, setCategory] = useState("mind");
    const [frequency, setFrequency] = useState(0);
    const [state, setState] = useState("SELECT");
    const [repeat, setRepeat] = useState("");


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
        setColor("");
        setCategory("mind");
        setFrequency(0);
    }

    

    useEffect(() => {

        // creates a new habit object which is then added to the firestore
        const createHabit = async () => {
            const newHabitObj = {
                category: category,
                color: color,
                currCounter: 0,
                daily: (repeat === "daily"), // todo: update somehow with the buttons
                exp: 10,
                frequency: frequency,
                name: name,
                notes: "",
                overallCounter: 0,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: firestore.collection("users").doc(user.local.uid),
                weekly: (repeat === "weekly")
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


    const handleCategory = (event) => {
        console.log(event.target.innerText);
        setCategory(event.target.innerText);
    }



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
                        <label className="repeat-label">Repeat</label>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline1" name="customRadio" className="custom-control-input radio-btn" onChange={() => {setRepeat("daily")}} />
                            <label className="custom-control-label" for="customRadioInline1">daily</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input type="radio" id="customRadioInline2" name="customRadio" className="custom-control-input" onChange={() => {setRepeat("weekly")}} />
                            <label className="custom-control-label" for="customRadioInline2">weekly</label>
                        </div>
                        {/* <div className="frequency">
                            <button onClick={() => {setRepeat("daily")}} className="daily-btn" type="button">daily</button>
                            <button onClick={() => {setRepeat("weekly")}} className="weekly-btn" type="button">weekly</button>
                        </div> */}
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
                            <BuddyButtons handleCategory={handleCategory} category="mind"></BuddyButtons>
                            <BuddyButtons handleCategory={handleCategory} category="body"></BuddyButtons>
                            <BuddyButtons handleCategory={handleCategory} category="life"></BuddyButtons>
                            <BuddyButtons handleCategory={handleCategory} category="other"></BuddyButtons>

                            {/* <button onClick={handleCategory} className="not-filled" type="button">mind</button>
                            <button onClick={handleCategory} className="not-filled" type="button">body</button>
                            <button onClick={handleCategory} className="not-filled" type="button">life</button>
                            <button onClick={handleCategory} className="not-filled" type="button">other</button> */}
                        </div>
                    </div>
                    <div className="form-group pb-2">
                        <label>Select a color</label>
                        <div>
                             {colors.map(circleColor => (
                                 <button className="color-btn no-font m-4" onClick={event => setColor(event.target.innerText)} style={{ backgroundColor: circleColor }} type="button">{circleColor}</button>
                             ))}
                        </div>
                    </div>
                    <div>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary active">
                                <input onClick={() => {console.log("clicked here")}} type="radio" name="options" id="option1" autocomplete="off" checked /> Active
                            </label>
                            <label className="btn btn-secondary">
                                <input onClick={() => {console.log("clicked here")}} type="radio" name="options" id="option2" autocomplete="off" /> Radio
                            </label>
                            <label className="btn btn-secondary">
                                <input type="radio" name="options" id="option3" autocomplete="off" /> Radio
                            </label>
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


function BuddyButtons(props) {
    const [buttonFill, setButtonFill] = useState(false);

    

    const handleFill = (event) => {
        setButtonFill(!buttonFill);
        props.handleCategory(event);
    }

     
    let buttonstyle = "not-filled";
    if (buttonFill) {
        buttonstyle = "filled";
    }

    // send props of w
    return (
        <button onClick={handleFill} className={buttonstyle} type="button">{props.category}</button>
    )

}

export default AddHabit;