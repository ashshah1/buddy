import React from "react";
import { fireauth } from "./firebase";

import './ProfileView.css';

function ProfileView() {
    return (
        <div className="profile-modal">
            <p className="lead profile-descrip"><span className="dev-note">note from the developers</span>: if you see any bugs or notice something isn't working great, please <a href="https://forms.gle/Bu38WEu7gBQNgcAx8">let us know</a>. we want to fix it.</p>
            <p className="lead profile-follow"><span className="font-weight-bold buddy-text">buddy</span> is a brand new application and we're constantly adding new features and bug fixes to make it the best it can be. Help us :)</p>
            <button className="sign-in btn btn-outline-dark m-3" onClick={() => fireauth.signOut()}>LOG OUT</button>
        </div>
    );
}


export default ProfileView;