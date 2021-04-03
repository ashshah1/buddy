import { Context } from "./Context";
import React, { useState, useContext } from "react";
import { firebase, fireauth } from "./firebase";

import TaskList from "./TaskList.js";
import LogInPage from "./LogInPage.js";
import XPBar from "./XPBar.js";
import LandingPage from "./LandingPage.js";

import { avatars, backgrounds, overlays } from './Vectors.js';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import coin from "./images/coin.png";
import calIcon from "./images/icon-calendar.png";
import statsIcon from "./images/icon-stats.png";
import shopIcon from "./images/icon-shop.png";
import avatarIcon from "./images/icon-avatar.png";
import Shop from './Shop.js';

import ProfileView from './ProfileView.js'

import "./HomePage.css";

function HomePage() {
  // modal for shop
  const [shop, setShop] = useState(false);
  const closeShop = () => setShop(false);
  const showShop = () => setShop(true);

  // modal for profile
  const [profile, setProfile] = useState(false);
  const closeProfile = () => setProfile(false);
  const showProfile = () => setProfile(true);

  const { user } = useContext(Context);

  // if user is logged in, displays their Home Page with tasks and avatar. if user is not logged in, displays log in page
  if (user) {
    return (
      <main>
        <img className="background" src={backgrounds[user.bgSelected]} alt="trees and blue skies"></img>
        <img className="background animations bounce-1" src={overlays[user.bgSelected]}></img>
        <img className="background animations bounce-1" src={overlays[3]}></img>
        <div className="nav-bar">
          <div className="nav-part1">
            <img src={shopIcon} className="icon" onClick={showShop}></img>
            <div className="coin-div">
              <img className="coin mr-3" src={coin}></img>
              <div>{user.points} coins</div>
            </div>
          </div>
          <div className="nav-part2">
            <img src={calIcon} className="icon"></img>
            <img src={statsIcon} className="icon"></img>
            <img src={avatarIcon} className="icon" onClick={showProfile}></img>
          </div>
        </div>

        <div className="img-container">
          <img className="curr-avatar vert-move" src={avatars[user.avatarSelected]} alt="animated personal avatar"></img>
        </div>
        <div className="content-containers">
          <TaskList></TaskList>
          <XPBar level={user.level} currXP={user.exp} totalXP="100"></XPBar>
        </div>

        <Modal show={shop} onHide={closeShop}>
          <Modal.Header closeButton>
            <Modal.Title>SHOP</Modal.Title>
          </Modal.Header>
          <Modal.Body><Shop></Shop></Modal.Body>
        </Modal>

        <Modal show={profile} onHide={closeProfile}>
          <Modal.Header closeButton>
            <Modal.Title>PROFILE</Modal.Title>
          </Modal.Header>
          {/* <Modal.Body><button className="sign-in btn btn-outline-dark m-3" onClick={() => fireauth.signOut()}>Log Out</button> */}
          <Modal.Body><ProfileView></ProfileView></Modal.Body>
        </Modal>
      </main>
    )
  } else {
    return (
      <div>
        <LogInPage>
        </LogInPage>
      </div>
    )
  }
};

export default HomePage;