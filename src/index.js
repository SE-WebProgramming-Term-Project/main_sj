import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav/Nav';
import Alvolmain from './Alvolmain/Alvolmain';
import Mypage from './Mypage/Mypage';
import Orderhistory from './Orderhistory/Orderhistory';
import reportWebVitals from './reportWebVitals';
import ChangeInform from './ChangeInform/ChangeInform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <Alvolmain/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
