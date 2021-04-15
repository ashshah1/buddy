import './CheckInModal.css';


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

function CheckInModal() {
  let moodElements = moods.map((mood) => {
    return (
      <div className="one-mood">
        <span className="emoji">{mood.emoji}</span>
        <span className="emoji-name">{mood.name}</span>
      </div>
    );
  });
  
  return (
    <div>
      <div className="check-in-q">How are you feeling today?</div>
      <div className="moods">{moodElements}</div>

      <div className="finish-btn">
        <button className="btn mt-4 add-btn">finish</button>
      </div>
      <p className="skip-btn">Skip</p>
    </div>
  );
}

export default CheckInModal;
