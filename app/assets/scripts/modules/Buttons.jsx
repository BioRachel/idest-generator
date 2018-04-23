import React from 'react';


export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(`I am the ${this.props.name} rune`);
  }

  render() {
    return <button class="rune-button" onClick={this.handleClick}><p>{this.props.name}</p></button>;
  }
}




export class ButtonRight extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert(`I am the ${this.props.name} rune`);
  }

  render() {
    return <button class="rune-button rune-button--right" onClick={this.handleClick}><p>{this.props.name}</p></button>
  }
}
