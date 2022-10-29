import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Users from './components/Users';
import PageNotFound from './components/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element= {<App />}/>
      <Route path='/About.js' element= {<About/>}/>
      <Route path='/Contact.js' element= {<Contact/>}/>
      <Route path='/Users.js' element= {<Users/>}/>
      <Route path='*' element= {<PageNotFound/>}/>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
