import React from 'react';
import { Button } from './Buttons.jsx';

export class CalendarButtonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { style: "button button--calendar button--selected" };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.state.style === "button button--calendar") {
      this.setState({ style: "button button--calendar button--selected" });
      this.props.sendUpAdd(this.props.name);
    } else {
        this.setState({ style: "button button--calendar" });
        this.props.sendUpRemove(this.props.name);
      }
    }

  render() {
    return (
        <Button style={this.state.style} clickHandler={this.clickHandler} name={this.props.name} />
    );
  }
}
