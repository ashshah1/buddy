import React, { useState } from "react";
import { Button } from "react-bootstrap";
import tester from './images/tester-avatar.png';
import background from './backgrounds/bg-one.png'

import './Shop.css';

// depending on how data is fetched, could use a for loop here to create individual avatar and background elements to render, would be more efficient and less tedious in the return. would also give us the flexibility to keep adding new customizations without changing code

function Shop() {
    const [isActive, setActive] = useState(false); // when false, show avatars. when true, show backgrounds

    const toggleViews = () => {
        setActive(!isActive);
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
                        <div className="col-md-4 col-lg-4">
                            <div className="an-avatar">
                                <p>avatar name</p>
                                <img className="avatar-img" src={tester}></img>
                                <button className="selected btn btn-light">selected</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="an-avatar">
                                <p>avatar name</p>
                                <img className="avatar-img" src={tester}></img>
                                <button className="selected btn btn-warning">select</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="an-avatar">
                                <p>avatar name</p>
                                <img className="avatar-img" src={tester}></img>
                                <button className="selected btn btn-warning">select</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="an-avatar">
                                <p>avatar name</p>
                                <img className="avatar-img" src={tester}></img>
                                <button className="selected btn btn-light">300 coins</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="an-avatar still-locked">
                                <p className="locked">avatar name</p>
                                <img className="avatar-img locked" src={tester}></img>
                                <button className="selected btn btn-light locked">selected</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="an-avatar still-locked">
                                <p className="locked">avatar name</p>
                                <img className="avatar-img locked" src={tester}></img>
                                <button className="selected btn btn-light locked">selected</button>
                            </div>
                        </div>
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


export default Shop;