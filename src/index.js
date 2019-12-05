import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button/Button';

const App = () => {
  return (
    <>
      <Button text="Click Me!!!!!!!" />
    </>
  );
};

const container = document.getElementById('container');
ReactDOM.render(<App />, container);
