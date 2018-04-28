import React from 'react';

export class Navbar extends React.Component {
  render() {
    return (
      <div class="navbar">
        <div class="navlink-container">
          <button class="navbar-button"><p>Idests</p></button>
          <button class="navbar-button"><p>Calendar</p></button>
        </div>
        <div class="title"><p>The Living City</p></div>
      </div>
    );
  }
}
