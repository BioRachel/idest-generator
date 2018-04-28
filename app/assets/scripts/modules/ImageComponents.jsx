import React from 'react';


export class Years extends React.Component {
  render() {
    if (this.props.selected === "true") {
      return <div class="image image--years"></div>;
    } else {
      return <div></div>;
    }
  }
}

export class Seasons extends React.Component {
  render() {
    if (this.props.selected === "true") {
      return <div class="image image--seasons"></div>;
    } else {
      return <div></div>;
    }
  }
}

export class Holidays extends React.Component {
  render() {
    if (this.props.selected === "true") {
      return <div class="image image--holidays"></div>;
    } else {
      return <div></div>;
    }
  }
}

export class Timeline extends React.Component {
  render() {
    if (this.props.selected === "true") {
      return <div class="image image--timeline"></div>;
    } else {
      return <div></div>;
    }
  }
}

export class Weeks extends React.Component {
  render() {
    if (this.props.selected === "true") {
      return <div class="image image--weeks"></div>;
    } else {
      return <div></div>;
    }
  }
}

export class Months extends React.Component {
  render() {
    if (this.props.selected === "true") {
      return <div class="image image--months"></div>;
    } else {
      return <div></div>;
    }
  }
}
