import React from 'react';
import Message from '../message/message.js';

export default function ContainerForMessages(props) {
  const { messages = [] } = props;

  return (
    <div>
      {messages.map((item, key) => <Message text={item.text} key={key} />) }
    </div>
  );
}