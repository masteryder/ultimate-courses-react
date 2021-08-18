import React, {useState, useEffect,Fragment} from 'react';

// Side effects that use functions outside the component,
// they don't need to be declared as a dependency
const subscribe = () =>{
    console.log('subscribed');
}
const unsubscribe = ()=>{
    console.log('unsubscribed');
}

const CounterEffect = () => {
    const [counter, setCounter] = useState(0);
    const [internalCount, setInternalCount] = useState(0);

    useEffect(()=>{
        document.title = `Counter set to ${counter} | Ultimate Counter`;
        console.log("Title was set");
    },[counter]);

    useEffect(()=>{
        const savedCounter = localStorage.getItem('ultimateCounterEffect');
        if(savedCounter != null){
            setCounter(parseInt(savedCounter, 10));
        }
    },[]); // useEffect with an empty dependency Array
    // only runs once when the component is mounted.


    useEffect(()=>{
        subscribe()
        // if we return inside a useEffect, the cleanup function will be called
        return ()=>{
            unsubscribe();
        }
    }, [])


    const onCountClickHandler = () => {
        setCounter(c => c+1)
    }
    const onInternalCountClickHandler = () => {
        setInternalCount(i => i+1)
    }
    const onSaveClickHandler = () =>{
        localStorage.setItem('ultimateCounterEffect', counter);
    }
    console.log("Main render return");


    return (
        <Fragment>
            <p>{counter}</p>
            <button type="button" onClick={onCountClickHandler}>Increment</button>
            <button type="button" onClick={onInternalCountClickHandler}>Increment (internal counter)</button>
            <button type={"button"} onClick={onSaveClickHandler}>Save Counter value</button>
        </Fragment>
    );
};

export default CounterEffect;