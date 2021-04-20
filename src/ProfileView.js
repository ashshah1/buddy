import React, { useState } from "react";
import { fireauth, firebase, firestore } from "./firebase";
import Modal from 'react-bootstrap/Modal';

import useHabits from './useHabits.js';

import './ProfileView.css';
import ModalHeader from "react-bootstrap/esm/ModalHeader";

function ProfileView() {

    const [deleteShow, setDeleteShow] = useState(false);
    var user = firebase.auth().currentUser;
    const habits = useHabits(user.uid)


    // ** careful with this chunk of code, deletes data directly **
    const deleteAccount = () => {
        for (let i = 0; i < habits.length; i++) {
            let currID = habits[i].id;
            const habitRef = firestore.collection("Habits").doc(currID).delete().then(() => {
                console.log("delete successful");
            })
        }

        user.delete().then(function () {
            console.log("user deleted");
        }).catch(function (error) {
        });

    }

    return (
        <div className="profile-modal">
            <p className="lead profile-descrip"><span className="dev-note">note from the developers</span>: if you see any bugs or notice something isn't working great, please <a href="https://forms.gle/Bu38WEu7gBQNgcAx8">let us know</a>. we want to fix it.</p>
            <p className="lead profile-follow"><span className="font-weight-bold buddy-text">buddy</span> is a brand new application and we're constantly adding new features and bug fixes to make it the best it can be. Help us :)</p>
            <button className="sign-in btn btn-outline-dark m-3" onClick={() => fireauth.signOut()}>LOG OUT</button>

            <button className="delete-btn btn btn-danger m-3" onClick={deleteAccount}>DELETE ACCOUNT</button>

            {/* <Modal show={deleteShow} onHide={() => setDeleteShow(false)} size="sm">
                <ModalHeader>
                    <Modal.Title>ARE YOU SURE?</Modal.Title>
                </ModalHeader>
                <Modal.Body>
                    <h3>You are about to delete your account. Confirming this will erase all of your data and you will not be able to get it back.</h3>
                    <button>Cancel</button>
                    <button>I understand, delete</button>
                </Modal.Body>

            </Modal> */}
        </div>
    );
}


export default ProfileView;