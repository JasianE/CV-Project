import logo from './logo.svg';
import './App.css';
import React from 'react'
import Basic from './Basic.js'
import Education from './Education.js'
import Practical from './Practical.js'

function App() {
  return (
    <div className="App">
      <Basic />
      <Education />
      <Practical />
    </div>
  );
}

export default App;
