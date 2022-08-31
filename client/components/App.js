import React, { Component } from 'react';
import { render } from 'react-dom';
import Board from './Board';
//import myImage from './stressed.png';



class App extends Component {
  render() {
    return (
      <div>
        <h1 id='Title'> Bootcamp Decision Fatigue Reducer </h1>
        <img id='stressedImage' src="https://blog.vantagecircle.com/content/images/size/w1000/2019/07/decision-fatigue.png"
          alt="Stressed person" width={600} height={400} />
        <Board />
      </div>
    )
  }
}
export default App;
