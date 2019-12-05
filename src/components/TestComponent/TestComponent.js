import React from 'react';
import PropTypes from 'prop-types';

const TestComponent = props => {
  const { name } = props;

  return <>Hello {name}</>;
};

TestComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export { TestComponent };
