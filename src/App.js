import React from 'react';
import './App.css';
import ContainerForMessages from './components/ContainerForMessages/ContainerForMessages.js';
import Input from './components/Input/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.sendMesssage = this.sendMesssage.bind(this);
  }

  sendMesssage({ text, user }) {
    const newMessages = this.state.messages;
    newMessages.push({ text, user });
    this.setState(newMessages);
    console.log(this.state.messages);
  }

  render() {
    return(
      <div className="App">
        <ContainerForMessages messages={this.state.messages} />
        <Input sendMessage={this.sendMesssage} />
      </div>
    );
  }
}

export default App;
