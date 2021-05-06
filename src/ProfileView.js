import React, { useState, useContext, useEffect } from "react";
import { fireauth, firebase, firestore } from "./firebase";
import { defaultIcons } from "./Vectors.js";
import blankSquare from './images/no-image.png';
import { Context } from "./Context";
import HomePage from './HomePage.js';

import useHabits from "./useHabits.js";

import "./ProfileView.css";
import LandingPage from "./LandingPage";

function ProfileView() {
	var currUser = firebase.auth().currentUser;
	const { user } = useContext(Context);

	const habits = useHabits(currUser.uid);
	const [isActive, setActive] = useState(false);



	// ** careful with this chunk of code, deletes data directly **

	const deleteAccount = () => {
		for (let i = 0; i < habits.length; i++) {
			let currID = habits[i].id;
			const habitRef = firestore
				.collection("Habits")
				.doc(currID)
				.delete()
				.then(() => {
					console.log("delete successful");
				});
		}

		currUser.delete().then(function () {
			console.log("user deleted");
		})
			.catch(function (error) {
				console.log(error)
			});

	}



	const toggleViews = () => {
		setActive(!isActive);
	}

	// let emptyBadges = [];

	// for (let i = 0; i < 12; i++) {
	// 	emptyBadges.push(
	// 		<div className="col-md-3">
	// 			<img className="badge-icon" src={blankSquare}></img>
	// 		</div>
	// 	)
	// }

	let allIcons = [];
	for (let i = 0; i < 6; i++) {
		if (user.currentIcon === i) {
			allIcons.push(<ChangeIcon key={i} index={i} status="selected" src={defaultIcons[i]}></ChangeIcon>)
		} else {
			allIcons.push(<ChangeIcon key={i} index={i} status="select" src={defaultIcons[i]}></ChangeIcon>)
		}

	}

	if (!isActive) {
		return (
			<div className="profile-modal">
				<div className="top-level-container">
					<div className="user-info-div">
						<img className="profile-icon" src={defaultIcons[user.currentIcon]}></img>
						<button className="change-icon" onClick={toggleViews}>change icon</button>
						<p className="first-name">{(user.displayName).split(' ')[0]}</p>
						<button className="sign-out" onClick={() => fireauth.signOut()}>LOG OUT</button>
					</div>
					{/* <div className="achievements-div">
						<p className="achievements-header">Achievements</p>
						<div className="container">
							<div className="row">
								{emptyBadges}
							</div>
						</div>
					</div> */}
				</div>
				<div className="bottom-level-container">
					<a href="https://forms.gle/Bu38WEu7gBQNgcAx8" className="feedback-form">Send Feedback</a>
					{/* <span className="delete-btn m-3" onClick={deleteAccount} disabled>DELETE ACCOUNT</span> */}
				</div>
			</div>
		);
	} else {
		return (
			<div className="all-icons">
				{allIcons}
			</div>
		)
	}
}

function ChangeIcon(props) {
	const { user } = useContext(Context);

	const changeStatus = async (user) => {
		const userRef = firestore.collection("users").doc(user.local.uid);
		if (props.status == "select") {
			await userRef.update({
				currentIcon: props.index
			})
		}
	}

	let buttonClass = "icon-select " + (props.status)
	return (
		<div className="icon-div">
			<img className="icon-image" src={props.src}></img>
			<button onClick={() => changeStatus(user)} className={buttonClass}>{props.status}</button>
		</div>
	)
}

export default ProfileView;
