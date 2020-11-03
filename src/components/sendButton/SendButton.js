import React from 'react';
import PropTypes from 'prop-types';

export default class SendButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className="send-button" onClick={this.props.handleSubmit}>Отправить</button>
    );
  }

  handleSubmit() {

  }
}

SendButton.propTypes = {
  handleSubmit: PropTypes.function
}