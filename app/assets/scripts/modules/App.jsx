import React from 'react';
import { TwoMajRune, OneMajRune } from './RuneLayouts.jsx';

export default class App extends React.Component {
  render() {
    if(this.props.majRunes === "two") {
      return (
      <TwoMajRune />
    );

    } else if (this.props.majRunes === "one") {
    return (
      <OneMajRune />
    );
    }
  }
}

ReactDOM.render(
  <App majRunes="two"/>,
  document.getElementById('app')
);
