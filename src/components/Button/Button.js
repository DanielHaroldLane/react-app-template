import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Styled = styled.div`
  padding: 5px 10px;
  border: 1px solid;
  border-color: #34343434;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
`;

const Button = props => {
  const { text, onClick } = props;

  return <Styled onClick={onClick}>{text}</Styled>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export { Button };
