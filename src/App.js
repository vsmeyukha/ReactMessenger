import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/message/message.js';
import ContainerForMessages from './components/ContainerForMessages/ContainerForMessages.js';

function App() {
  return (
    <div className="App">
      <ContainerForMessages messages={
        [
          {
            text: 'blabla'
          },
          {
            text: 'Hi'
          }
        ]
      } />
    </div>
  );
}

export default App;
