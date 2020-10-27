import React from 'react';
import './avatar.css';
import PropTypes from 'prop-types';

export default function Avatar(props) {
  const { src } = props;
  return (
    <img className="avatar" src={src}/>
  );
}

Avatar.propTypes = {
  src: PropTypes.string
}