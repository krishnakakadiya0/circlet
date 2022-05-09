import React, { useState } from 'react';

function CityProps({country}) {
    return (
        <div>
            {country === 'India' ? <div>Famous Place - Tajmahal, Statue of Unity</div> : <div>Famous Place - London, Oxford</div>}
        </div>
    );
}

export default CityProps;