import React, { useState } from 'react';

function CityFun(props) {

    const [city, setCity] = useState('Surat');
    const [place, setPlace] = useState('Amezia Water Park');

    return (
        <div>
            <div>City[Function base Component] : {city}</div>
            <button onClick={() => setCity('Ahemdabad')}>Change City</button>
            <div>Famous Place[Function base Component] : {place}</div>
            <button onClick={() => setPlace('Kakariya lake')}>Change Place</button>
        </div>
    );
}

export default CityFun;