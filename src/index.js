import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let currentdate = new Date(2020, 5, 6, 12);
currentdate = currentdate.getHours();
let greeting = "";

const cssStyle = {};

if(currentdate >= 1 && currentdate < 12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if (currentdate >= 12 && currentdate < 19){
  greeting = "Good Afternoon";
  cssStyle.color = "Orange";
}else{
  greeting = "Good Night"
  cssStyle.color = "#212121";
}

ReactDOM.render(
  <>
  <div className="heading">
  <h1>Hello Dear, <span style={cssStyle}>{greeting}</span></h1>
  </div>

  </>,
  document.getElementById('root')
)
