import React, { Component } from 'react';
import { render } from 'react-dom';
import { useState } from 'react';
//import statment for your recommendation component

function Board() {

const [daysLeft, setDaysLeft] = useState(0)
const [daysStudy, setDaysStudy] = useState(0)
const [studyHours, setStudyHours] = useState(0)
const [budget, setBudget] = useState(0)
const [recommendedBootcamp, setRecommendedBootcamp] = useState("")
  
  const handleClick = (event) => {
  event.preventDefault();
    
  fetch('/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "daysLeft": daysLeft,
      "daysStudy": daysStudy,
      "studyHours": studyHours,
      "budget": budget
    }),
  })
    .then(res => res.json())
    .then(data => {
      console.log("testing if handleclick works")
      console.log(data);
      console.log("success!");
      setRecommendedBootcamp(data)
      //deconstruct the object so you just get the string from the object you got from your backend //recommendedBootCamp = "adsf";
    })
    .catch(err => console.log(err))   
}
  return (
    <form className="information">
      <label>How soon do you plan on enrolling? (In days) </label>
      <input type="number" onChange={(event) => { setDaysLeft(event.target.value)}} />
      <label>How many days per week do you have to study? </label>
      <input type="number" onChange={(event) => { setDaysStudy(event.target.value)}}  />
      <label>How many hours can you study per day? </label>
      <input type="number"onChange={(event) => { setStudyHours(event.target.value)}} />
      <label>What is your budget for tuition? (In $ Dollars)</label>
      <input type="number" onChange={(event) => { setBudget(event.target.value)}}  />
      <button onClick={handleClick} > Submit</button>
      
      <p id='rec'>
        Based on your contraints this is the recommended bootcamp : {recommendedBootcamp}
      </p>
    </form>
   
    // this is where you're going to call your recommendation component with the object from your backend call passed in as props
    // <Recommendation props={recommendedBootCamp} />
  )
}




export default Board;