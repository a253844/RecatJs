import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const changeName=(newName)=>{ 
    name=newName;
    console.log("hey")//加入此行
}

var name="舊的名字";


ReactDOM.render(
  
  <div>
    <App name={name} handleClick={changeName}/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
