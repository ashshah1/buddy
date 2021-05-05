import background from './images/about.png';
import feature1 from './images/feature-1.png';
import feature2 from './images/feature-2.png';
import feature3 from './images/feature-3.png';
import feature4 from './images/feature-4.png';
import about1 from './images/about-1.png'

import './About.css';

export default function About() {
    return (
        <div>
            <div className="about-page about-1" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
                <div className="mid-div">
                    <h1 className="top-header">buddy</h1>
                    <p className="subheader-type">// a gamified approach to habit building</p>
                    <button className="learn-more">learn more</button>
                </div>

            </div>
            <div className="about-2">
                <div className="text-about">
                    <h1 className="section-header">About</h1>
                    <p>Mental health problems are prevalent among college students, and can have negative implications on productivity and social relationships. </p>
                    <p> In an effort to address this, we sought to design a product that would help college students achieve a routine of healthier habits to improve their well-being. </p>
                    <p> Research showed us that habits influence health and quality of life, and gamification promotes motivation and engagement — combining the two, we built buddy.</p>
                </div>
                <div>
                    <img className="about-vector" src={about1}></img>
                </div>
            </div>

            <div className="about-3">
                <div className="features-header">
                    <h1 className="section-header">Key Feature</h1>
                    <p>Around 40% of our everyday behavior is repeated in the form of habits. Habits affect our health, well-being, and quality of life. However, they aren’t the easiest to form. Our goal is to make habit building a fun and engaging process. </p>
                    <div className="features-container">
                        <div className="feature-item">
                            <img className="feature-image" src={feature1} />
                            <div>
                                <h2>Habit Tracking</h2>
                                <p>Users can set meaningul goals for themselves. From mindfulness breaks to physical health, what does wellbeing mean to you?</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div>
                            <h2>Daily Check-in</h2>
                            <p>Users can encouraged to check in with themselves and reflect on how they are feeling</p>
                        </div>
                        <img className="feature-image" src={feature2} />
                    </div>
                    <div className="feature-item">
                        <img className="feature-image" src={feature3} />
                        <div>
                            <h2>Gamified Rewards</h2>
                            <p>Building on the gamified model, users are rewarded for keeping up with their habits on a regular basis.</p>
                        </div>
                    </div>

                    <div className="feature-item">
                        <div>
                            <h2>Customizable Home</h2>
                            <p>Upgrade avatars and their homes with  coins collected. Unlock newer items as you level up!</p>
                        </div>
                        <img className="feature-image" src={feature4} />
                    </div>
                </div>
                <button>Meet Your Buddy</button>
            </div>
            <div className="about-4">
                <h1>Demo</h1>
            </div>
            <div className="about-5">
                <h2 className="section-header">Team Members</h2>
            </div>
        </div>
    )
}