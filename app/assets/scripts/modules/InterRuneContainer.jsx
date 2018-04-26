import React from 'react';
import Button from './Buttons.jsx';

export class InterRuneContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: "rune-button" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.state.style === "rune-button") {

      if (this.props.interRunesSelected < 4) {
        this.setState({ style: "rune-button rune-button--selected" });
        this.props.addClicks(this.props.name);
      } else {
        alert(`Maximum 4 inter runes can be selected`);
      }
    }

    else {
        this.setState({ style: "rune-button" });
        this.props.dropClicks(this.props.name);
      }
    }


  render() {
    return <Button style={this.state.style} clickHandler={this.clickHandler} name={this.props.name} />
  }
}
