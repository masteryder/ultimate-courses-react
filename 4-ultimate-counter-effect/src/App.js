import React, {useState} from "react";
import CounterEffect from "./CounterEffect";

const App = () => {
  const [show, setShow] = useState(true);
  const onClickHandler = () => {
    setShow(s => !s);
  };
  return (
      <main>
        {show ? <CounterEffect /> : null}
        <button onClick={onClickHandler}>{show ? 'Hide' : 'Show'} Counter</button>
      </main>
  );
};

export default App;
