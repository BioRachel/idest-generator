import React from 'react';
import { Button } from './Buttons.jsx';
import { NavButtonI, NavButtonC } from './NavButton.jsx';

export class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.passUp = this.passUp.bind(this);
  }

  passUp(name) {
    this.props.changePage(name);
  }

  render() {
    return (
      <div class="navbar">
        <div class="navlink-container">
          <NavButtonI passUp={this.passUp} name="Idests" style={this.props.style}/>
          <NavButtonC passUp={this.passUp} name="Calendar" style={this.props.style}/>
        </div>
        <div class="title"><p>The Living City</p></div>
      </div>
    );
  }
}
