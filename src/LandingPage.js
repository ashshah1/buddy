import React from 'react';
import { Link } from "react-router-dom";
import background from "./images/test.png";
import icon1 from './images/landingicon-1.png';
import icon2 from './images/landingicon-2.png';
import icon3 from './images/landingicon-3.png';
import icon4 from './images/landingicon-4.png';
import arrow from './images/arrow.png';

import { firebase, fireauth } from "./firebase";
import googleLogo from "./images/google.png";


import './LandingPage.css';

function LandingPage() {

    return (
        <React.Fragment>
            <div className="landing landing-1" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
                <div className="mid-div">
                    <h1>buddy</h1>
                    <p>Set meaningful goals, stay motivated with a buddy, build long-lasting healthy habits, and improve your well-being</p>
                    <button onClick={() => fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
                        {/* <img className="ml-3" src={googleLogo}></img>
                    <p className="mr-4">Continue with Google</p> */}
                    BUILD YOUR HABITS
                    </button>

                    {/* <button><Link to="/">BUILD YOUR HABITS</Link></button> */}
                </div>
                <img className="bounce pt-5" src={arrow} alt="down arrow"></img>
            </div>

            <div className="landing landing-2">
                <div>
                    <h1>Our Goal</h1>
                    <p>Habits play a large role in our lives. Around <strong>40%</strong> of our everyday behavior is repeated in the form of habits.</p>
                    <p>Habits affect our <strong>health, well-being, and quality of life.</strong> However, they aren’t the easiest to form.</p>
                    <p>Our goal is to make habit building a fun and engaging process. We want to make it as easy as possible for you to develop healthy habits and <strong>improve your well-being!</strong></p>
                </div>
            </div>

            <div className="landing landing-3">
                <div className="content">
                    <h1>How it Works</h1>
                    <div className="landing-container">
                        <img src={icon1} alt="check list"></img>
                        <div>
                            <h2>1.</h2>
                            <h2>Create Habits + Set Goals</h2>
                            <p>Choose from our list of recommended habits or customize your own.</p>
                        </div>
                    </div>
                    <div className="landing-container landing-order">
                        <div>
                            <h2>2.</h2>
                            <h2>Earn Rewards</h2>
                            <p>Gain exp, earn coins, and collect badges as you work towards your goals. </p>
                        </div>
                        <img src={icon2} alt="wrapped gift box"></img>
                    </div>
                    <div className="landing-container">
                        <img src={icon3} alt="paintbrush over a desktop monitor"></img>
                        <div>
                            <h2>3.</h2>
                            <h2>Customize Your Experience</h2>
                            <p>Unlock new shop items as you level up and change up your background or buddy.</p>
                        </div>
                    </div>
                    <div className="landing-container landing-order">
                        <div>
                            <h2>4.</h2>
                            <h2>View Charts</h2>
                            <p>See all of your stats in one place to measure your progress.</p>
                        </div>
                        <img src={icon4} alt="calendar"></img>
                    </div>
                </div>
                <button className="button" onClick={() => fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
                    MEET YOUR BUDDY <span role="img" aria-label="right arrow">→</span>
                </button>

            </div>

            <div className="landing landing-4">
                <p>copyright © 2021 buddy all rights reserved</p>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;