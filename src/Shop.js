import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "./Context";
import { avatars, backgrounds, overlays } from './Vectors.js'
import { firestore, firebase } from './firebase'


import './Shop.css';

function Shop() {
    const { user } = useContext(Context);

    const [isActive, setActive] = useState(false); // when false, show avatars. when true, show backgrounds

    const toggleViews = () => {
        setActive(!isActive);
    }

    let currAvatars = user.avatarOwn; // array of currently owned avatars
    let currSelected = user.avatarSelected; // the current avatar that the user has selected

    let currBg = user.bgOwn;
    let bgSelected = user.bgSelected;

    let avatarArray = [];
    for (let i = 0; i < 6; i++) {
        let newAvatar;
        if (currSelected === i) {
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar" index={i} src={avatars[i]} class="selected btn btn-light" status="selected"></AvatarElem>
        } else if (currAvatars.includes(i)) {
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar" index={i} src={avatars[i]} class="selected btn btn-warning" status="select"></AvatarElem>
        } else {
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar" index={i} src={avatars[i]} class="selected btn btn-success" status="200 coins"></AvatarElem>
        }

        if (i >= avatars.length) {
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar still-locked" index={i} src={avatars[i]} class="btn btn-success" status="200 coins"></AvatarElem>
        }
        avatarArray.push(newAvatar)
    }

    let bgArray = [];
    for (let i = 0; i < 4; i++) {
        let newBg;
        if (bgSelected === i) {
            newBg = <BackgroundElem key={backgrounds[i]} src={backgrounds[i]} index={i} locked="bg-box" class="selected btn btn-light" status="selected"></BackgroundElem>
        } else if (currBg.includes(i)) {
            newBg = <BackgroundElem key={backgrounds[i]} src={backgrounds[i]} index={i} locked="bg-box" class="selected btn btn-warning" status="select"></BackgroundElem>
        } else {
            newBg = <BackgroundElem key={backgrounds[i]} src={backgrounds[i]} index={i} locked="bg-box" class="selected btn btn-success" status="insert price"></BackgroundElem>
        }
        if (i >= backgrounds.length) {
            newBg = <BackgroundElem key={backgrounds[i]} index={i} locked="bg-box still-locked" src={backgrounds[i]} class="btn btn-success" status="insert price"></BackgroundElem>
        }


        bgArray.push(newBg);
    }

    if (!isActive) {
    return (
        <div>
            <div className="button-container">
                <Button variant="info" className="active">AVATARS</Button>
                <Button variant="outline-info" onClick={toggleViews} className="not-active">BACKGROUNDS</Button>
            </div>
            <div className="avatar-view">
                <div className="container">
                    <div className="row">
                        {avatarArray}
                    </div>
                </div>
            </div>
        </div>
    );
    } else {
        return (
            <div>
             <div className="button-container">
                 <Button variant="outline-info" onClick={toggleViews} className="not-active">AVATARS</Button>
                 <Button variant="info" className="active">BACKGROUNDS</Button>
             </div>
             <div className="background-view">
                 <div className="container">
                     <div className="row">
                         {bgArray}
                     </div>
                 </div>
             </div>
         </div>
        )
    }
}

// creates an avatar element, setting it up with bootstrap grid classnames and well as styling button based off of user data
function AvatarElem(props) {
    const { user } = useContext(Context);

    let locked = (props.locked).includes("still-locked")
    
    const changeStatus = async (user) => {
        const userRef = firestore.collection("users").doc(user.local.uid);
        if (props.status == "select") {
            await userRef.update({
                avatarSelected: props.index
            })
        } else if (props.status == "insert price" && user.points > 100 && !locked) { // replace 100 with actual price
            await userRef.update({
                avatarSelected: props.index,
                points: firebase.firestore.FieldValue.increment(-100),
                avatarOwn: firebase.firestore.FieldValue.arrayUnion(props.index)
            })
        }
    }

        return (
            <div className="col-md-4 col-lg-4">
                <div className={props.locked}>
                    <p>AVATAR NAME</p>
                    <img className="avatar-img" src={props.src}></img>
                    <button onClick={() => { changeStatus(user) }} className={props.class}>{props.status}</button>
                </div>
            </div>
        ) 
    }


function BackgroundElem(props) {
    const { user } = useContext(Context);

    const changeStatus = async (user) => {
        const userRef = firestore.collection("users").doc(user.local.uid);
        if (props.status == "select") {
            await userRef.update({
                bgSelected: props.index
            })
        } else if (props.status == "insert price" && user.points >= 100) { // replace 100 with actual price
            await userRef.update({
                bgSelected: props.index,
                points: firebase.firestore.FieldValue.increment(-100),
                bgOwn: firebase.firestore.FieldValue.arrayUnion(props.index)
            })
        }
    }
    return (
        <div className="col-md-6 col-lg-6">
            <div className={props.locked}>
                <img className="bg-img" src={props.src}></img>
                <button onClick={() => {changeStatus(user)}} className={props.class}>{props.status}</button>
            </div>
        </div>
    )
}

export default Shop;