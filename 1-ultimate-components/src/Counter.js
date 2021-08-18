import React, { useState } from 'react';
import InteractiveView from './InteractiveView';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const onIncrementHandler = () => {
        // we can also directly use counter here,
        // but apparently it is better to use the function form 
        // when the set function only depends on the current value.
        // The counter parameter is injected as a parameter of the function
        setCounter(c => c + 1);
    }
    return (
        <InteractiveView value={counter} onAction={onIncrementHandler} actionText='Increment'/>
    );
};

export default Counter;