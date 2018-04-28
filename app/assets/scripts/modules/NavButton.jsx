import React from 'react';
import { Button } from './Buttons.jsx';

export class NavButtonI extends React.Component {
  constructor(props) {
    super(props);
    this.passUpLower = this.passUpLower.bind(this);
    this.state = { style: "navbar-button" };
    this.chooseState();
  }

  chooseState() {
    if (this.props.style === "Idests") {
      this.state.style = "navbar-button navbar-button--selected";
      this.forceUpdate();
    } else {

    }
  }

  passUpLower() {
    this.props.passUp(this.props.name);
  }

  render() {
    return (
      <Button style={this.state.style} name={this.props.name} clickHandler={this.passUpLower}/>
    );
  }
}

export class NavButtonC extends React.Component {
  constructor(props) {
    super(props);
    this.passUpLower = this.passUpLower.bind(this);
    this.state = { style: "navbar-button" };
    this.chooseState();
  }

  chooseState() {
    if (this.props.style === "Calendar") {
      this.state.style = "navbar-button navbar-button--selected";
      this.forceUpdate();
    } else {

    }
  }

  passUpLower() {
    this.props.passUp(this.props.name);
  }

  render() {
    return (
      <Button style={this.state.style} name={this.props.name} clickHandler={this.passUpLower}/>
    );
  }
}
