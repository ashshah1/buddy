import { useState, useEffect, useContext } from 'react';
import { firestore, firebase } from './firebase';
import { Context } from "./Context.js";

import './AddHabit.css'
import { ToggleButton, ButtonGroup } from 'react-bootstrap';

function EditHabit(props) {
    console.log(props.task);
    const { user } = useContext(Context);

    // props is the current habit id

    // keep track of all the values being added to the new habit
    const [name, setName] = useState(props.task.taskName);
    const [color, setColor] = useState(props.task.color);
    const [category, setCategory] = useState(props.task.category);
    const [frequency, setFrequency] = useState(props.task.taskFreq);
    const [state, setState] = useState("SELECT");
    const [repeat, setRepeat] = useState(props.task.taskDuration);

    const [radioValue, setRadioValue] = useState('mind');

    const colors = ["#A9E3EB", "#69AABF", "#C1F8E4", "#ACECB7", "#F5BF32", "#F98A5B", "#C1C6F8", "#C4C4C4"]

    const radios = [
        { name: 'mind', value: 'mind' },
        { name: 'body', value: 'body' },
        { name: 'life', value: 'life' },
        { name: 'other', value: 'other'},
      ];

    // on submit, the state of the process is updates which will trigger further changes in the effect hook
    const submitHabit = (event) => {
        event.preventDefault();
        setState("FINISH");
    }

    // clears the content on the page once a habit is added
    const resetModal = () => {
        props.close();
    }

    useEffect(() => {
        const habitRef = firestore.collection("Habits").doc(props.id);

        // creates a new habit object which is then added to the firestore
        const updateHabit = async () => {
            await habitRef.update({
                category: category,
                color: color,
                daily: (repeat === "daily"), // todo: update somehow with the buttons
                exp: 10,
                frequency: frequency,
                name: name,
                weekly: (repeat === "weekly")
            })   
        };
        if (state === "FINISH") {
            updateHabit();
            resetModal();
        }
    }, [state, name]);

    return (
        <div>
            <div className="add-habit-container">
                <form className="add-habit-form" onSubmit={submitHabit}>
                    <div className="form-group pb-2">
                        <label htmlFor="title">Name</label>
                        <input type="text" className="form-control habit-name" placeholder={props.task.taskName} value={name} onChange={event => {
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
                        <ButtonGroup toggle>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    type="radio"
                                    variant="light"
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => {
                                        setRadioValue(e.currentTarget.value)
                                        setCategory(e.currentTarget.value);
                                    }}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
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
                    <button
                        type="submit" className="btn mt-4 add-btn" disabled={!user}>
                        Save Habit!
                    </button>
                </form>
            </div>
        </div>

    )
}

export default EditHabit;