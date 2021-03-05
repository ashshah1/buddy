import React from 'react';
import { Link } from "react-router-dom";
import background from "./backgrounds/test.png";

import './LandingPage.css';

function LandingPage() {

    return (
        <React.Fragment>
            <div className="landing landing-1" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
                <div>
                <h1>buddy</h1>
                <p className="pb-3">Set meaningful goals, stay motivated with a buddy, build long-lasting healthy habits, and improve your well-being</p>
                <button><Link to="/SignIn">BUILD YOUR HABITS</Link></button>
                </div>
                <img className="bounce" src="https://www.flaticon.com/svg/vstatic/svg/318/318426.svg?token=exp=1614973326~hmac=a69d3fafddddb0270a3332fe684d3b70" alt="down arrow"></img>
            </div>

            <div className="landing landing-2">
                <div>
                <h1>Our Goal</h1>
                <p>Habits play a large role in our lives. Around 40% of our everyday behavior is repeated in the form of habits.</p>
                <p>Habits affect our health, well-being, and quality of life. However, they aren’t the easiest to form.</p>
                <p>Our goal is to make habit building a fun and engaging process. We want to make it as easy as possible for you to develop healthy habits and improve your well-being!</p>
                </div>
            </div>
            <div className="landing landing-3">
                <h1>How it Works</h1>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <button><Link to="/SignIn">MEET YOUR BUDDY</Link></button>
            </div>
            <div className="landing landing-4">
                <p>Privacy Policy</p>
                <p>buddy @2021</p>
            </div>
        </React.Fragment>
    );
}

export default LandingPage;