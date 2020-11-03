import React from 'react';
import SendButton from '../SendButton/SendButton';
import PropTypes from 'prop-types';

export default class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    console.log(this.state.content);
  }

  handleChange(evt) {
    const content = evt.target.value;
    this.setState({ content })
  }

  render() {
    return (
      <div>
        <input value={this.state.content} onChange={this.handleChange} ></input>
        <SendButton handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

Input.propTypes = {
  src: PropTypes.string
}