import "./CheckInModal.css";
import { firestore, firebase } from "./firebase";
import { Context } from "./Context.js";

import { useState, useContext, useEffect } from "react";

// step 1: static modal
// step 2: button should write to the database
// step 3: check time
// compare to current time (if same day, say they can check back in tommorrow), if not display modal

const moods = [
  {
    emoji: "😞",
    name: "awful",
    value: 1,
  },
  {
    emoji: "🙁",
    name: "bad",
    value: 2,
  },
  {
    emoji: "😐",
    name: "meh",
    value: 3,
  },
  {
    emoji: "🙂",
    name: "good",
    value: 4,
  },
  {
    emoji: "😄",
    name: "rad",
    value: 5,
  },
];

const onlyMoods = ["awful", "bad", "meh", "good", "rad"];

function CheckInModal() {
  const { user } = useContext(Context);
  const [currMood, setMood] = useState(0);
  const [showCheck, setCheck] = useState("");
  const [showFin, setFin] = useState("hidden");
  const [stamp, setStamp] = useState(0);
  const [state, setState] = useState("SELECT");

  let currDate = new Date(); // returns current date on users local machine

  let currOnlyDate = currDate.setHours(0, 0, 0, 0);
  let lastStamp = user.lastStamp.toDate(); // converts most recent timestamp stored in firestore to JS-understandable Date object
  let lastStampDate = lastStamp.setHours(0, 0, 0, 0);

  // if the last stamp date is the same as today, the modal should be hidden. otherwise by default it shows
  useEffect(() => {
    if (currOnlyDate <= lastStampDate && stamp === 0) {
      setCheck("hidden");
      setFin("");
      setStamp(1);
    } else if (currOnlyDate > lastStampDate && stamp != 0) {
      setStamp(0);
    }
  });

  useEffect(() => {
    const updateMood = async () => {
      const userRef = firestore.collection("users").doc(user.local.uid);
      await userRef.update({
        allMoods: firebase.firestore.FieldValue.arrayUnion(currMood),
        timeStamps: firebase.firestore.FieldValue.arrayUnion(currDate),
        lastStamp: currDate,
      });
    };
    if (state === "FINISH") {
      updateMood();
    }
  }, [state]);

  // toggles between "check-in" view and "come-back-tomorrow" view
  const toggleHidden = () => {
    if (showCheck == "") {
      setCheck("hidden");
      setFin("");
    }
  };

  useEffect(() => {
    const skipCheck = async () => {
      const userRef = firestore.collection("users").doc(user.local.uid);
      await userRef.update({
        lastStamp: currDate,
      });
    };
    if (state === "FINISH") {
      skipCheck();
    }
  }, [state]);

  let moodElements = moods.map((mood) => {
    return (
      <div
        key={mood.name}
        onClick={() => {
          setMood(onlyMoods.indexOf(mood.name) + 1);
          toggleHidden();
          setState("FINISH");
        }}
        className="mood"
      >
        <p className="emoji">{mood.emoji}</p>
        <span className="emoji-name">{mood.name}</span>
      </div>
    );
  });

  return (
    <div>
      <div className={showCheck}>
        <div className="check-in-q">How are you feeling today?</div>
        <div className="moods">{moodElements}</div>
        <p className="skip-btn" onClick={() => { 
          toggleHidden() 
          setState("FINISH")
        }}>Skip</p>
      </div>
      <div className={showFin}>
        <p className="check-in-q">
          Hi! Thanks for checking in with <span>buddy</span> today. Come back tomorrow!
        </p>
      </div>
    </div>
  );
}

export default CheckInModal;
