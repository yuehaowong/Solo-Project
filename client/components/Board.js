import React, { Component } from 'react';
import { render } from 'react-dom';
import { useState } from 'react';





function Board() {

const [daysLeft, setDaysLeft] = useState(0)
const [daysStudy, setDaysStudy] = useState(0)
const [studyHours, setStudyHours] = useState(0)
const [budget, setBudget] = useState(0)
  



  const handleClick = (event) => {
  event.preventDefault();
    
  fetch('http://localhost:3001/test', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      daysLeft: daysLeft,
      daysStudy: daysStudy,
      studyHours: studyHours,
      budget: budget
    }),
  })
    .then(res => res.json())

    .then(data => {
      console.log("success!");
    })
    .catch(err => console.log(err))   
}

  

  //React.useEffect(() => {
  //  fetch("/")
  //    .then((res) => res.json())
  //    .then((data) => setData(data.message));
  //}, []);

  return (
    <form className="information">
      <label>How soon do you plan on enrolling? (In days) </label>
      <input type="number" onChange={(event) => { setDaysLeft(event.target.value)}} />
      <label>How many days per week do you have to study? </label>
      <input type="number" onChange={(event) => { setDaysStudy(event.target.value)}}  />
      <label>How many hours can you study per day? </label>
      <input type="number"onChange={(event) => { setStudyHours(event.target.value)}} />
      <label>What is your budget for tuition?</label>
      <input type="number" onChange={(event) => { setBudget(event.target.value)}}  />
      <button onClick={ handleClick} > Submit</button>
    </form>
  )
}



export default Board;