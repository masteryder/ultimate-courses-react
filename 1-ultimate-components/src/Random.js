import React, { useState } from 'react';
import InteractiveView from './InteractiveView';

const Random = () => {
    const [randVal, setRandVal] = useState(0);
    function onRandomizeHandler(){
        setRandVal(Math.round(Math.random()*100));
    }
    return <InteractiveView value={randVal} onAction={onRandomizeHandler} actionText='Randomize'></InteractiveView>
}
export default Random;