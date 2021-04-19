import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

import './XPBar.css'
import { Context } from './Context';

function XPBar(props) {
    
    return (
        <div className="xpBar">
            <div id="progress-bar">
                <ProgressBar className="pain" variant="success" now={props.currXP} animated={false} max={props.totalXP} />
            </div>
            <div className="level-descrip">
                <p className="level">LEVEL {props.level}</p>
                <p className="level">{props.currXP}/{props.totalXP} XP</p>
            </div>
        </div>
    )
}

export default XPBar;