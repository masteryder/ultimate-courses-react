import React, {useState} from 'react';


const OnMessage = () => <span>The machine is On!</span>
const OffMessage = () => <span>The machine is Off!</span>

const UltimateMachine = () => {
  const [isOn, setIsOn] = useState(false);
  const onClickHandler = () => {
    setIsOn(i => !i);
  }

  return (
  <section>
    <h1>
      The Ultimate Machine
    </h1>
    {isOn ? <OnMessage /> : <OffMessage />}
    <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
      Turn { !isOn ? 'On' : 'Off'}
    </button>
  </section>);
};

export default UltimateMachine;