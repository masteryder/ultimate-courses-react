import React, {Fragment, useEffect, useRef} from 'react';
import uniqid from 'uniqid';

const Input = ({label, type = 'input', ...props})=>{
  const id = useRef(uniqid());
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      { type === 'textarea' ?
        (<textarea id={id} {...props} />) :
        (<input id={id} {...props} />)}

    </Fragment>
  );
}

export default Input;