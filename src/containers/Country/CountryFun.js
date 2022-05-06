import React, { useState } from 'react';

function CountryFun(props) {
    
    const [country, setCountry] = useState('India');
    const [gdp, setGdp] = useState(0);
    
    const changeCountry = () => {
        setCountry('Uk');
    }
    
    return (
        <div>
            <div>Country[Function base Component] : {country}</div>
            <button onClick={() => changeCountry()}>Change Country</button>
            <div>GDP[Function base Component] : {gdp}</div>
            <button onClick={() => setGdp(5.5)}>Change GDP</button>
        </div>
    );
}

export default CountryFun;