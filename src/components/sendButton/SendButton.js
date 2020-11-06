import React from 'react';
import PropTypes from 'prop-types';

export default function SendButton(props) {

  return (
    <button className="send-button" onClick={props.handleSubmit} >Отправить</button>
  );

}

SendButton.propTypes = {
  handleSubmit: PropTypes.func
};