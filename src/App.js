import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/message/message.js';

function App() {
  return (
    <div className="App">
      <Message text="Привет" className="message"/>
    </div>
  );
}

export default App;
