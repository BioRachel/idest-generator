import React from 'react';
import TwoMajRune from './RuneLayouts.jsx';
import SiteHeader from './SiteHeader.jsx';

export default class Website extends React.Component {
  render() {
    if (this.props.majRunes === "two") {
      return (
        <div>
          <SiteHeader />
          <TwoMajRune />
        </div>
      );

    } else {
      return (
        <SiteHeader />
      );
    }
  }
}
