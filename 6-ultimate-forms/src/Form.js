import React, {useState} from 'react';
import './form.css';

const Form = () =>{
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onFirstNameChangeHandler = (e)=>{
    console.log(e.target.value);
    setFirstName(e.target.value);
  };
  const onLastNameChangeHandler = (e)=>{
    console.log(e.target.value);
    setLastName(e.target.value);
  };

  return (
    <form>
      <div>{firstName}</div>
      <label htmlFor={"firstName"}>First Name</label>
      <input value={firstName} onChange={onFirstNameChangeHandler} type={"text"} id={"firstName"} />

      <div>{lastName}</div>
      <label htmlFor={"lastName"}>Last Name</label>
      <input value={lastName} onChange={onLastNameChangeHandler} type={"text"} id={"lastName"} />
    </form>);
}
export default Form;