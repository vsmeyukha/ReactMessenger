import React from 'react';
import './message.css';
import Avatar from '../Avatar/Avatar.js';

function Message(props) {
  return (
    <div className="message">
      <Avatar src="https://i.pinimg.com/originals/52/a6/f9/52a6f95ebf904bb4685d559a907598e2.jpg"/>
      {props.text}
    </div>
  );
}

export default Message;
