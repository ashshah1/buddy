import React, { useState } from "react";
import { Button } from "react-bootstrap";
import tester from './images/tester-avatar.png';

import './Shop.css';

// depending on which button is clicked, hide the other div and toggle views?
// conditional rendering
// default shop is active, on click, swithc which is active 

// populate div elements with a for loop and depending on which is active, pass that array?


function Shop() {
    const [isActive, setActive] = useState(false); // when false, show avatars. when true, show backgrounds

    return (
        <div>
            <p>This is where the shop would be</p>
            <Button variant="info">AVATARS</Button>
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
}


export default Shop;