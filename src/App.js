import React from 'react';
import './App.css';
import ContainerForMessages from './components/ContainerForMessages/ContainerForMessages.js';
import Input from './components/Input/Input';

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
      <Input />
    </div>
  );
}

export default App;
