import React, {useState, useEffect} from 'react';
import './stopwatch.css';

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [counterActive, setCounterActive] = useState(true);
    const onClickHandler = () => {
        setCounterActive(!counterActive)
    }

    useEffect(()=>{
        let interval = null;
        if(counterActive){
            interval = setInterval(()=>{
                setTime(t => t + 1);
                console.log('set time');
            },1000);
        }
        return () => clearInterval(interval);
    }, [counterActive]);

    // takes seconds and displays it as hh:mm:ss
    const formattedTime = new Date(time * 1000).toISOString().substr(11,8);

    return (
        <section className={"stopwatch-frame"}>
            <h1>Ultimate Stopwatch</h1>
            <span>{formattedTime}</span>
            <button onClick={onClickHandler} aria-pressed={!counterActive}>Start / Stop</button>
        </section>
    );
}

export default Stopwatch;