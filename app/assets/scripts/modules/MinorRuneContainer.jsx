import React from 'react';
import { Button } from './Buttons.jsx';

export class MinorRuneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: "button" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.state.style === "button") {
      if (this.props.otherRunes === 6) {
        alert(`Maximum 6 total Inter and Minor runes can be selected`);
      } else {
        this.setState({ style: "button button--selected" });
        this.props.addClicks(this.props.name);
      }
    }

    else {
        this.setState({ style: "button" });
        this.props.dropClicks(this.props.name);
      }
    }


  render() {
    return <Button style={this.state.style} clickHandler={this.clickHandler} name={this.props.name} />
  }
}
