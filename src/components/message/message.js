import React from 'react';
import './message.css';
import Avatar from '../Avatar/Avatar.js';
import PropTypes from 'prop-types';

function Message(props) {
  return (
    <div className="message">
      <Avatar src="https://i.pinimg.com/originals/52/a6/f9/52a6f95ebf904bb4685d559a907598e2.jpg"/>
      {props.user}: {props.text}
    </div>
  );
}

export default Message;

Message.propTypes = {
  text: PropTypes.string,
  user: PropTypes.string
};