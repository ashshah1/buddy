import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar'

import './XPBar.css'

function XPBar(props) {
    return (
        <div id="xp-bar">
        <p>{props.level}</p>
        <p>{props.currXP}/{props.totalXP}</p>
        <div id="progress-bar">
            <ProgressBar variant="success" now={props.currXP} animated={true} max={props.totalXP} />
        </div>
        </div>
    )
}

export default XPBar;