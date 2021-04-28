import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

import './XPBar.css'
import { Context } from './Context';

function XPBar(props) {
    
    return (
        <div className="xp-bar-container">
             <div className="level-descrip">
                <p className="level">LEVEL {props.level}</p>
                <p className="level">{props.currXP}/{props.totalXP} XP</p>
            </div>
            <div id="xp-bar">
                <ProgressBar id="bar" now={props.currXP} animated={false} max={props.totalXP} />
            </div>
        </div>
    )
}

export default XPBar;