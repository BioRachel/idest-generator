import React from 'react';
import ReactDOM from 'react-dom';
import TestApp from './modules/ButtonHandler.jsx';

/*
class TestApp extends React.Component {
  render() {
    return (
      <h1>I am a react module</h1>
    );
  }
}
*/

ReactDOM.render(
  <TestApp />,
  document.getElementById('root')
);
