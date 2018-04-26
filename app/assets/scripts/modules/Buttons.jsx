import React from 'react';

export default class Button extends React.Component {
  render () {
    return (
      <button class={this.props.style} onClick={this.props.clickHandler}><p>{this.props.name}</p></button>
    );
  }
}
