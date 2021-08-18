import React, {useState} from 'react';


const ErrorMessage = () => { 
  let errorMessage = "This is an error :(";
  return (<span>{errorMessage}</span>);};

const UltimateErrorMachine = () => {
  const [showError, setShowError] = useState(false);
  const onClickHandler = () => {
    setShowError(i => !i);
  }

  
  // In javascript true && "something" returns "something".
  // whereas false && "something" returns null
  // Which means that if showError is true React displays the ErrorMessage component
  // And if it is false, React doesn't display anything
  return (<section>
    <h1>
      The Ultimate Machine
    </h1>
    { showError && <ErrorMessage />}
    <button type="button" onClick={onClickHandler} aria-pressed={showError}>
      Toggle Error
    </button>
  </section>);
};

export default UltimateErrorMachine;