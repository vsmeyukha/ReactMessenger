import React from 'react';
import SendButton from '../SendButton/SendButton';
import PropTypes from 'prop-types';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnterClick = this.handleEnterClick.bind(this);
  }

  handleSubmit() {
    console.log(this.state.content);
    this.props.sendMessage({ text: this.state.content, user: 'blabla' });
  }

  handleEnterClick(evt) {
    if (evt.key === 'Enter') {
      this.handleSubmit();
      console.log(evt.key);
    }
  }
  

  handleChange(evt) {
    const content = evt.target.value;
    this.setState({ content });
  }

  render() {
    return (
      <div>
        <input value={this.state.content} onChange={this.handleChange} onKeyDown={this.handleEnterClick} ></input>
        <SendButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

Input.propTypes = {
  sendMessage: PropTypes.func
};