import React from 'react';

function ProgressBar(props) {
    return (
        <div>
        <p>{props.level}</p>
        <p>{props.currXP}/{props.totalXP}</p>
        <div>
            <progress value={props.currXP} max={props.totalXP}>
            </progress>
        </div>
        </div>
    )

}

export default ProgressBar;