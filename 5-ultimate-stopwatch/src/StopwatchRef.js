import React, {useState, useEffect, useRef} from 'react';
import './stopwatch.css';

const StopwatchRef = () => {
    const [time, setTime] = useState(0);
    const currentTime = useRef(0);
    const [counterActive, setCounterActive] = useState(true);

    const onClickHandler = () => {
        setCounterActive(!counterActive)
    }
    useEffect(()=>{
        let interval = null;
        if(counterActive){
            interval = setInterval(()=>{
                currentTime.current++;
                setTime(currentTime.current);
                console.log('set time');
            },1000)
        }
        return () => clearInterval(interval);
    }, [counterActive]);

    return (
        <section className={"stopwatch-frame"}>
            <h1>Ultimate Stopwatch</h1>
            <span>{time}</span>
            <button onClick={onClickHandler} aria-pressed={!counterActive}>Start / Stop</button>
        </section>
    );
}

export default StopwatchRef;