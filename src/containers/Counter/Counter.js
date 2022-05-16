import React, { useState } from 'react';
import './Counter.css';

function Counter(props) {

    let [counter, setcounter] = useState(0);

    return (
        <div className='main'>
            <div className='box'>
                <button onClick={() => setcounter(counter > 0 ? counter - 1 : counter )}>-</button>
                <div className='counter'>{counter}</div>
                <button onClick={() => setcounter(counter < 10 ? counter + 1 : counter )}>+</button>
            </div>
        </div>
    );
}

export default Counter;