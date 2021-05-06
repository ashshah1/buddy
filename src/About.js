import background from './images/about.png';
import feature1 from './images/feature-1.png';
import feature2 from './images/feature-2.png';
import feature3 from './images/feature-3.png';
import feature4 from './images/feature-4.png';
import about1 from './images/about-1.png'

import david from './images/david.png';
import winnie from './images/winnie.png';
import kayla from './images/kayla.png';
import ash from './images/ash.png';

import iSchool from './images/iSchool.png'
import { init } from "ityped";

import './About.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About() {
    return (
        <div>
            <div className="about-page about-1" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', height: '100vh' }}>
                <div className="mid-div">
                    <h1 className="top-header">buddy</h1>
                    <p className="subheader-type line-1 anim-typewriter">A gamified approach to habit building</p>
                    <button className="learn-more">LEARN MORE</button>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className="about-2">
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
                    <h1 data-aos="fade-up" data-aos-duration="1500" className="section-header">Key Features</h1>
                    <p data-aos="fade-up" data-aos-duration="1500">Around 40% of our everyday behavior is repeated in the form of habits. Habits affect our health, well-being, and quality of life. However, they aren’t the easiest to form. Our goal is to make habit building a fun and engaging process. </p>
                    <div data-aos="fade-up" data-aos-duration="1500" className="features-container">
                        <div data-aos="fade-up" data-aos-duration="1500" className="feature-item">
                            <img className="feature-image-1" src={feature1} />
                            <div>
                                <h2>Habit Tracking</h2>
                                <p>Users can set meaningul goals for themselves. From mindfulness breaks to physical health, what does wellbeing mean to you?</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1500" className="feature-item">
                            <div>
                                <h2>Daily Check-in</h2>
                                <p>Users can encouraged to check in with themselves and reflect on how they are feeling</p>
                            </div>
                            <img className="feature-image-2" src={feature2} />
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1500" className="feature-item">
                            <img className="feature-image-3" src={feature3} />
                            <div>
                                <h2>Gamified Rewards</h2>
                                <p>Building on the gamified model, users are rewarded for keeping up with their habits on a regular basis.</p>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="1500" className="feature-item">
                            <div>
                                <h2>Customizable Home</h2>
                                <p>Upgrade avatars and their homes with  coins collected. Unlock newer items as you level up!</p>
                            </div>
                            <img className="feature-image-4" src={feature4} />
                        </div>
                    </div>
                </div>
                <button data-aos="fade-up" data-aos-duration="1500" className="learn-more">MEET YOUR BUDDY</button>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className="about-4">
                <h2 className="section-header">Demo</h2>
                <iframe width="800" height="500" src="https://www.youtube.com/embed/OwPqMuXoM_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" className="about-5">
                <h2 className="section-header">Team Members</h2>
                <div className="about-team">
                    <div className="team-profile">
                        <a className="zoom" href="https://www.linkedin.com/in/kaylamchea/" target="_blank"><img className="profile-pic" src={kayla}></img></a>
                        <p className="name">Kayla Chea</p>
                        <p className="role">UX Designer</p>
                        <p className="role">Front-End Developer</p>
                    </div>
                    <div className="team-profile">
                        <a className="zoom" href="https://www.linkedin.com/in/ashni-shah-579349141/" target="_blank"><img className="profile-pic" src={ash}></img></a>
                        <p className="name">Ash Shah</p>
                        <p className="role">Front-End Developer</p>
                        <p className="role">UX Designer</p>
                    </div>
                    <div className="team-profile">
                        <a className="zoom" href="https://www.linkedin.com/in/winniema19/" target="_blank"><img className="profile-pic" src={winnie}></img></a>
                        <p className="name">Winnie Ma</p>
                        <p className="role">Product Manager</p>
                    </div>
                    <div className="team-profile">
                        <a className="zoom" href="https://www.linkedin.com/in/david-mai-810bb0172/" target="_blank"><img className="profile-pic" src={david}></img></a>
                        <p className="name">David Mai</p>
                        <p className="role">Back-End Developer</p>
                    </div>
                </div>

            </div>
            <div className="about-6">
                <h2 className="section-header">Project Status</h2>
                <p>University of Washington Information School Capstone project for Winter/Spring 2021</p>
                <p>Waiting for Frank to go over handoff documentation</p>
            </div>

            <div className="about-footer">
                <img className="ischool-logo" src={iSchool} />
                <p>copyright © 2021 buddy</p>
            </div>
        </div>
    )
}