import React from 'react';
import ReactDOM from 'react-dom';
import { TestComponent } from './components/TestComponent/TestComponent';

const App = () => {
  return (
    <>
      <TestComponent name="Dan" />
    </>
  );
};

const container = document.getElementById('container');
ReactDOM.render(<App />, container);
