import background from "./images/bg-login.png";
import './LogInPage.css';
import { firebase, fireauth } from "./firebase";

import googleLogo from "./images/google.png";



function LogInPage () {
    return (
        <div className="log-in">
            <img className="background" src={background} alt="plain screen with some animated trees"></img>
            <div className="log-in-text">
                <h1 className="buddy-header pb-2">buddy</h1>
                <p className="buddy-subheader pb-5">Set goals. Collect points. Build habits.</p>
                <button className="google-btn" onClick={() => fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>
                    <img className="ml-3" src={googleLogo}></img>
                    <p className="mr-4">Continue with Google</p>
                </button>
            </div>
        </div>
    )

}

export default LogInPage;