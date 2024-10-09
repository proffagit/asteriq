import React from 'react';

import './Date.css';

export default function Date() {


    const today = new globalThis.Date();


    const monthNames = [
        "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu",
        "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu",
        "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"
    ];

    // RENDER
    return (
        <div className="dateContainer">
            <div className="dateWrapper">
                <div className="day">{today.getDate()}</div>
                <div className="month">{monthNames[today.getMonth()]}</div>
            </div>
        </div>
    );
}
