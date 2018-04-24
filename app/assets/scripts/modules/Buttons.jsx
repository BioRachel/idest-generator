import React from 'react';


export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { style: "rune-button" };
  }


  handleClick() {
    if (this.state.style === "rune-button") {
      this.setState({ style: "rune-button rune-button--selected" });
    } else {
      this.setState({ style: "rune-button"});
    }
  }

  render() {
    return <button class={this.state.style} onClick={this.handleClick}><p>{this.props.name}</p></button>;
  }
}



export class ButtonRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { style: "rune-button--right" };
  }


  handleClick() {
    if (this.state.style === "rune-button--right") {
      this.setState({ style: "rune-button--right rune-button--right--selected" });
    } else {
      this.setState({ style: "rune-button--right"});
    }
  }

  render() {
    return <button class={this.state.style} onClick={this.handleClick}><p>{this.props.name}</p></button>
  }
}
