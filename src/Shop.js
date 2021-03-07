import React, { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import tester from './images/a1.png';
import background from './images/bg-one.png'
import { Context } from "./Context";
import { avatars, backgrounds } from './Vectors.js'


import './Shop.css';

// depending on how data is fetched, could use a for loop here to create individual avatar and background elements to render, would be more efficient and less tedious in the return. would also give us the flexibility to keep adding new customizations without changing code

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
    for (let i = 0; i < avatars.length; i++) {
        let newAvatar;
        if (currSelected === i) {
            newAvatar = <AvatarElem key={avatars[i]} src={avatars[i]} class="selected btn btn-light" status="selected"></AvatarElem>
            // populate in preview somehow
        } else if (currAvatars.includes(i)) {
            newAvatar = <AvatarElem key={avatars[i]} src={avatars[i]} class="selected btn btn-warning" status="select"></AvatarElem>
        } else {
            newAvatar = <AvatarElem key={avatars[i]} src={avatars[i]} class="selected btn btn-success" status="insert price"></AvatarElem>
        }

        // if (i > avatars.length) {
        //     newAvatar = <AvatarElem key={avatars[i]} src={avatars[i]} class="btn btn-success" status="insert price"></AvatarElem>
        // }
        avatarArray.push(newAvatar)
    }

    if (!isActive) {
    return (
        <div>
            <div className="button-container">
                <Button variant="info">AVATARS</Button>
                <Button variant="outline-info" onClick={toggleViews}>BACKGROUNDS</Button>
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
                    <Button variant="outline-info" onClick={toggleViews}>AVATARS</Button>
                    <Button variant="info">BACKGROUNDS</Button>
                </div>
                <div className="background-view">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <div className="bg-box">
                                    <img className="bg-img" src={background}></img>
                                    <button className="bg-selected btn btn-light">selected</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="bg-box">
                                    <img className="bg-img" src={background}></img>
                                    <button className="bg-selected btn btn-warning">select</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="bg-box">
                                    <img className="bg-img" src={background}></img>
                                    <button className="bg-selected btn btn-warning">select</button>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6">
                                <div className="bg-box still-locked">
                                    <img className="bg-img locked" src={background}></img>
                                    <button className="bg-selected btn btn-light hidden">selected</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function AvatarElem(props) {
    return (
        <div className="col-md-4 col-lg-4">
            <div className="an-avatar">
                <p>avatar name</p>
                <img className="avatar-img" src={props.src}></img>
                <button className={props.class}>{props.status}</button>
            </div>
        </div>
    )
}

function BackgroundElem(props) {
    return (
        <div className="col-md-6 col-lg-6">
            <div className="bg-box">
                <img className="bg-img" src={props.src}></img>
                <button className="bg-selected btn btn-light">selected</button>
            </div>
        </div>
    )
}


export default Shop;