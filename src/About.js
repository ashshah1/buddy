import background from './images/about.png'
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
                and moving on
            </div>
        </div>
    )
}