import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
import '../../UI/Button/Button.css'

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid, setIsvalid] = useState(true);
  const [isButtonBlur, setIsButtonBlur] = useState(false);

  const goalInputChangeHandler = event => {
    if(enteredValue.trim().length === 0){
      setIsvalid(false);
      setIsButtonBlur(true);
      console.log(isButtonBlur)
    }else{
      setIsvalid(true);
      setIsButtonBlur(false);
      console.log(isButtonBlur)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setIsvalid(false);
      setIsButtonBlur(true);
      return;     
    }
    props.onAddGoal(enteredValue);
    event.target.reset(); 
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isvalid ? 'invalid ' : ''}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
{ isvalid &&  <button  className="button" type="submit">Add Goal</button>}
{ !isvalid &&  <button className="buttonfinal" type="submit">Add Goal</button>}
    </form>
  );
};

export default CourseInput;
