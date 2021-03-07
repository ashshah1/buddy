import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './NavBar.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import shopIcon from "./images/icon-shop.png";

import Shop from './Shop.js';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav>
        <ul className="nav-container">
          <li className="header-name">
            buddy
            </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <img src={shopIcon} onClick={handleShow}></img>
      </nav>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SHOP</Modal.Title>
        </Modal.Header>
        <Modal.Body><Shop></Shop></Modal.Body>
      </Modal>
      </div>
    ) 
  };

export default NavBar;