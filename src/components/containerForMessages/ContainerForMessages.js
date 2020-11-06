import React from 'react';
import Message from '../Message/Message.js';
import PropTypes from 'prop-types';

export default function ContainerForMessages(props) {
  const { messages = [] } = props;

  return (
    <div>
      {messages.map((item, key) => <Message text={item.text} user={item.user} key={key} />) }
    </div>
  );
}

ContainerForMessages.propTypes = {
  messages: PropTypes.array
}