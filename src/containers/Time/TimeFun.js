import React, { useEffect, useState } from 'react';

function TimeFun(props) {

    const[time, setTime] = useState(new Date());

    const changeTime = () =>{
        setTime(new Date());
    }

    useEffect(
        () => {
            // componentDidMount
            // componentDidUpdate
            const setTimeId = setInterval(() => changeTime(), 1000);

            // componentWillUnmount
            return() => {
                clearInterval(setTimeId);
            } 
        },
    [time]);

    return (
        <div>
            {time.toLocaleTimeString()}
        </div>
    );
}

export default TimeFun;
