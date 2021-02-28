import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

import './XPBar.css'

function XPBar(props) {
    return (
        <div className="xpBar">
            <div className="level-descrip">
                <p className="level">LEVEL {props.level}</p>
                <p className="level">{props.currXP}/{props.totalXP}</p>
            </div>
        <div id="progress-bar">
            <ProgressBar variant="success" now={props.currXP} animated={false} max={props.totalXP} />
        </div>
        </div>
    )
}

export default XPBar;