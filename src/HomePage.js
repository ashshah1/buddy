import { Context } from "./Context";
import React, { useState, useContext } from "react";
import { firebase, fireauth } from "./firebase";
import background from "./images/bg-one.png";

import TaskList from "./TaskList.js";
import LogInPage from "./LogInPage.js";
import XPBar from "./XPBar.js";

import { avatars, backgrounds, overlays } from './Vectors.js';

import "./HomePage.css";

function HomePage() {

  const { user } = useContext(Context);

  // if user is logged in, displays their Home Page with tasks and avatar. if user is not logged in, displays log in page
  if (user) {
    return (
      <main>
        <img className="background" src={backgrounds[user.bgSelected]} alt="trees and blue skies"></img>
        <img className="background animations bounce-1" src={overlays[user.bgSelected]}></img>
        <img className="background animations bounce-1" src={overlays[3]}></img>
        <div className="coin-div">{user.points} coins</div>
        <img className="curr-avatar" src={avatars[user.avatarSelected]} alt="animated personal avatar"></img>
        <button className="sign-in btn btn-outline-dark" onClick={() => fireauth.signOut()}>Log Out</button>
        <div className="content-containers">
        <TaskList></TaskList>
        <XPBar level={user.level} currXP={user.exp} totalXP="100"></XPBar>
      </div>
      </main>
    )
  } else {
    return(
      <div>
        <LogInPage>
            {/* <p>User exp: {user.exp}</p>
            <p>User level: {user.level}</p> */}
        </LogInPage>
      </div>
    )
  }
};

export default HomePage;