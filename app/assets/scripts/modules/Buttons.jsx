import React from 'react';


export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { style: "rune-button" };
  }

  onClick() {
    if (this.state.style === "rune-button") {
      this.setState({ style: "rune-button rune-button--selected" });
      this.props.addClick(this.props.name);
    } else {
      this.setState({ style: "rune-button"});
      this.props.dropClick(this.props.name);
    }
  }

  render() {
    return <button class={this.state.style} onClick={this.onClick}><p>{this.props.name}</p></button>;
  }
}




export class ButtonRight extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { style: "rune-button rune-button--right" };
  }

  onClick() {
    if (this.state.style === "rune-button rune-button--right") {
      this.setState({ style: "rune-button rune-button--right rune-button--selected" });
      this.props.addClick(this.props.name);
    } else {
      this.setState({ style: "rune-button rune-button--right"});
      this.props.dropClick(this.props.name);
    }
  }

  render() {
    return <button class={this.state.style} onClick={this.onClick}><p>{this.props.name}</p></button>
  }
}
