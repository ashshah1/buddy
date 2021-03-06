import background from "./backgrounds/bg-two.png";
import './LogInPage.css';
import { firebase, fireauth } from "./firebase";



function LogInPage () {
    return (
        <div>
            <img className="background" src={background} alt="plain screen with some animated trees"></img>
            <h1 className="buddy-header">buddy</h1>
            <p className="buddy-subheader">Set goals. Collect points.Build habits.</p>
            <button className="btn btn-outline-secondary" onClick={() => fireauth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}>Continue with Google</button>

        </div>
    )

}

export default LogInPage;