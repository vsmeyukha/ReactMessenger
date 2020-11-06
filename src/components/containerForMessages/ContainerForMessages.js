import React from 'react';
import Message from '../Message/Message.js';
import PropTypes from 'prop-types';
import './container-for-messages.css';

export default function ContainerForMessages(props) {
  const { messages = [] } = props;

  return (
    <div className="container-for-messages">
      {messages.map((item, key) => <Message text={item.text} user={item.user} key={key} />) }
    </div>
  );
}

ContainerForMessages.propTypes = {
  messages: PropTypes.array
};