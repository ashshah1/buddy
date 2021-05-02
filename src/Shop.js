import React, { useState, useContext } from "react";
import { Context } from "./Context";
import { avatars, backgrounds, names } from './Vectors.js'
import { firestore, firebase } from './firebase'
import { avatarInfo, bgInfo } from './constants.js'; 

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
    let currLevel = user.level;

    let avatarArray = [];
    for (let i = 0; i < 6; i++) {
        let newAvatar;
        let cost = avatarInfo[i].price + " coins"

        if (currSelected === i) {
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar" name={names[i]} index={i} src={avatars[i]} class="btn btn-light" status="selected"></AvatarElem>
        } else if (currAvatars.includes(i)) { 
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar" name={names[i]} index={i} src={avatars[i]} class="btn btn-warning" status="select"></AvatarElem>
        } else if (currLevel < avatarInfo[i].levelReq) { 
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar still-locked lockText" name={names[i]} index={i} src={avatars[i]} class="btn btn-success" price={avatarInfo[i].price} status={cost}></AvatarElem>
        } else {
            newAvatar = <AvatarElem key={avatars[i]} locked="an-avatar" name={names[i]} index={i} src={avatars[i]} class="btn btn-success" price={avatarInfo[i].price}  status={cost}></AvatarElem>
        }
        avatarArray.push(newAvatar)
    }

    let bgArray = [];
    for (let i = 0; i < 4; i++) {
        let newBg;
        let cost = bgInfo[i].price + " coins"
        if (bgSelected === i) {
            newBg = <BackgroundElem key={backgrounds[i]} src={backgrounds[i]} index={i} locked="bg-box" class="btn btn-light" status="selected"></BackgroundElem>
        } else if (currBg.includes(i)) {
            newBg = <BackgroundElem key={backgrounds[i]} src={backgrounds[i]} index={i} locked="bg-box" class="btn btn-warning" status="select"></BackgroundElem>
        } else if(currLevel < bgInfo[i].levelReq) {
            newBg = <BackgroundElem key={backgrounds[i]} index={i} locked="bg-box still-locked bgLockText" src={backgrounds[i]} class="btn btn-success" price={bgInfo[i].price} status={cost}></BackgroundElem>
        
        } else {
            newBg = <BackgroundElem key={backgrounds[i]} src={backgrounds[i]} index={i} locked="bg-box" class="btn btn-success" price={bgInfo[i].price} status={cost}></BackgroundElem>
        }
        bgArray.push(newBg);
    }

    if (!isActive) {
    return (
        <div>
            <div className="button-container">
                <button type="button" className="active">AVATARS</button>
                <button onClick={toggleViews} type="button" className="not-active">BACKGROUNDS</button>
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
                 <button onClick={toggleViews} type="button" className="not-active">AVATARS</button>
                 <button className="active">BACKGROUNDS</button>
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
    let unBought = props.status.includes("coins")
    let lockedText = "";

    let locked = (props.locked).includes("still-locked")

    if (locked) {
        lockedText = "Avatar is locked until LEVEL " + avatarInfo[props.index].levelReq;
    }
    
    const changeStatus = async (user) => {
        const userRef = firestore.collection("users").doc(user.local.uid);
        if (props.status == "select") {
            await userRef.update({
                avatarSelected: props.index
            })
        } else if (unBought && user.points >= (props.price) && !locked) { // replace 200 with actual price
            await userRef.update({
                avatarSelected: props.index,
                points: firebase.firestore.FieldValue.increment(-props.price),
                avatarOwn: firebase.firestore.FieldValue.arrayUnion(props.index)
            })
        }
    }

        return (
            <div className="col-md-4 col-lg-4">
                <div className={props.locked}>
                    <p>{props.name}</p>
                    {lockedText}
                    <img className="avatar-img" src={props.src}></img>
                    <button onClick={() => { changeStatus(user) }} className={props.class}>{props.status}</button>
                </div>
            </div>
        ) 
    }


function BackgroundElem(props) {
    const { user } = useContext(Context);
    let unBought = props.status.includes("coins")

    let locked = (props.locked).includes("still-locked")
    let lockedText = "";
    if (locked) {
        lockedText = "Background is locked until LEVEL " + bgInfo[props.index].levelReq;
    }
    
    // let cost = props.status + " coins"

    const changeStatus = async (user) => {
        const userRef = firestore.collection("users").doc(user.local.uid);
        if (props.status == "select") {
            await userRef.update({
                bgSelected: props.index
            })
        } else if (unBought && user.points >= (props.price) && !locked) { // replace 100 with actual price
            await userRef.update({
                bgSelected: props.index,
                points: firebase.firestore.FieldValue.increment(-props.price),
                bgOwn: firebase.firestore.FieldValue.arrayUnion(props.index)
            })
        }
    }
    return (
        <div className="col-md-6 col-lg-6">
            <div className={props.locked}>
                {lockedText}
                <img className="bg-img" src={props.src}></img>
                <button onClick={() => {changeStatus(user)}} className={props.class}>{props.status}</button>
            </div>
        </div>
    )
}

export default Shop;