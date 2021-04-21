import React, { useState, createContext, useEffect } from "react";
import { firebase, fireauth, firestore } from "./firebase";

const Context = createContext();

const ContextProvider = props => {
    const [ user, setUser ] = useState();

    useEffect(() => {
        let unsubscribe = () => {};

        fireauth.onAuthStateChanged(async localUserData => {
            unsubscribe();
            if (localUserData) {
                const userRef = firestore.collection("users").doc(localUserData.uid);

                (await userRef.get()).exists || await userRef.set({
                    uid: localUserData.uid,
                    displayName: localUserData.displayName,
                    email: localUserData.email,
                    exp: 0,
                    points: 0,
                    level: 1,
                    bgOwn: [0],
                    bgSelected: 0,
                    avatarOwn: [0],
                    avatarSelected: 0,
                    badges: [],
                    timeStamps: [],
                    allMoods: [],
                    currentIcon: 0
                });

                unsubscribe = userRef.onSnapshot(snapshot => {
                    setUser({
                        ...snapshot.data(),
                        local: { ...localUserData }
                    });
                });
            } else {
                unsubscribe = () => {};
                setUser(localUserData);
            }
        });

        return unsubscribe;
    }, []);

    return <Context.Provider value={{user}}>
        {props.children}
    </Context.Provider>;
};

export { Context, ContextProvider };