import React, { Component } from 'react';
import { render } from 'react-dom';



function Board() {
  return (
    <form className="information">
      <label>Please list your options </label><input type="text" />
      <label>How many days do you have to study? </label><input type="number" />
      <label>How many hours can you study per day? </label><input type="number" />
      <label>What programming languages do you prefer</label><input type="text" />
      <label>What is your budget for tuition?</label><input type="number" />
      <button> Submit</button>
    </form>
  )
}











export default Board;