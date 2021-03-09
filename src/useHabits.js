import { useState, useEffect, useContext } from "react"
import { firestore } from "./firebase"

// hook to get an array of the users current habits 
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

export default useHabits;