import React, {useState} from 'react';
import './form.css';

const FormWithState = () =>{

  const initialState = {
    firstName: '',
    lastName: '',
    description: '',
    locomotion: '',
    agree: false,
    breakfast: false,
    dinner: false,
    supper: false,
    shirt: ''
  }
  const [formState, setFormState] = useState(initialState);


  const onFormStateChanged = (e)=>{
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log(`attribute: ${e.target.name}. value: ${value}`)
    // this weird spread operator stuff means :
    // we take the form state that was previously there
    // and then we just replace the attribute that has the same name as the input that changed
    setFormState({
      ...formState,
      [e.target.name]: value,
    })
  }



  const onClearHandler = () =>{
    setFormState(initialState);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (<form>
    <div>{formState.firstName}</div>
    <label htmlFor={"firstName"}>First Name</label>
    <input name={"firstName"} value={formState.firstName} onChange={onFormStateChanged} type={"text"} id={"firstName"} />

    <div>{formState.lastName}</div>
    <label htmlFor={"lastName"}>Last Name</label>
    <input name={"lastName"} value={formState.lastName} onChange={onFormStateChanged} type={"text"} id={"lastName"} />

    <label htmlFor={"description"}>Description</label>
    <textarea value={formState.description} name={"description"} id={"description"} rows="10" onChange={onFormStateChanged}>
    </textarea>

    <label htmlFor={"locomotion"}>Preferred Locomotion type</label>
    <select id={"locomotion"} name={"locomotion"} onChange={onFormStateChanged} value={formState.locomotion}>
      <option>None selected</option>
      <option value="car">Car</option>
      <option value="train">Train</option>
      <option value="bicycle">Bicycle</option>
    </select>

    <fieldset>
      <legend>T-shirt Size</legend>

      <label htmlFor={"shirtSmall"}>Small</label>
      <input type="radio" name="shirt" id="shirtSmall"
             onChange={onFormStateChanged} value="sm" checked={formState.shirt === "sm" } />

      <label htmlFor={"shirtMedium"}>Medium</label>
      <input type="radio" name="shirt" id="shirtMedium"
             onChange={onFormStateChanged} value="md" checked={formState.shirt === "md" } />

      <label htmlFor={"shirtLarge"}>Large</label>
      <input type="radio" name="shirt" id="shirtLarge"
             onChange={onFormStateChanged} value="lg" checked={formState.shirt === "lg"} />
    </fieldset>

    <fieldset>
      <legend>Select your meals</legend>

      <label htmlFor={"breakfast"}>Breakfast</label>
      <input type={"checkbox"} name={"breakfast"} id={"breakfast"} checked={formState.breakfast}
             onChange={onFormStateChanged} />

      <label htmlFor={"dinner"}>Dinner</label>
      <input type={"checkbox"} name={"dinner"} id={"dinner"} checked={formState.dinner}
             onChange={onFormStateChanged}/>

      <label htmlFor={"supper"}>Supper</label>
      <input type={"checkbox"} name={"supper"} id={"supper"} checked={formState.supper}
             onChange={onFormStateChanged}/>
    </fieldset>

    <label htmlFor={"agree"}>I agree to the terms</label>
    <input type={"checkbox"} id={"agree"} name={"agree"} onChange={onFormStateChanged} checked={formState.agree}></input>

    <button onClick={onSubmitHandler} type={"submit"}>Submit</button>
    <button onClick={onClearHandler} type={"button"}>Clear values</button>

  </form>);
}
export default FormWithState;