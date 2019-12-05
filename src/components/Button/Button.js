import React from 'react';
import PropTypes from 'prop-types';

const style = {
  padding: '5px 10px',
  border: '1px solid',
  borderColor: '#34343434',
  textAlign: 'center',
  borderRadius: '4px',
  cursor: 'pointer',
  userSelect: 'none',
};

const Button = props => {
  const { text, onClick } = props;

  return (
    <div style={style} onClick={onClick}>
      {text}
    </div>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export { Button };
