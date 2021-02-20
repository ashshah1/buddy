import React from 'react';

function ProgressBar({level, currXP, totalXP}) {
    return (
        <div>
        <p>{level}</p>
        <p>{currXP}/{totalXP}</p>
        <div>
            <progress value={currXP} max={totalXP}>
            </progress>
        </div>
        </div>
    )

}

export default ProgressBar;