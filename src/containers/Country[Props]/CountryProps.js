import React, { useState } from 'react';
import CityProps from './CityProps';

function CountryProps(props) {

    const [country, setCountry] = useState('India');

    return (
        <div>
            <div>Country[Using Props] : {country}</div>
            <CityProps country={country} />
            <button onClick={() => setCountry('UK')}>Click Here</button>
        </div>
    );
}

export default CountryProps;