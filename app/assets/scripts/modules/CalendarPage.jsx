import React from 'react';
import { CalendarApp } from './CalendarApp.jsx';
import { CalendarSidebar } from './CalendarSidebar.jsx';

export class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: "true",
      months: "true",
      years: "true",
      seasons: "true",
      holidays: "true",
      timeline: "true"
    };
    this.removeDisplay = this.removeDisplay.bind(this);
    this.addDisplay = this.addDisplay.bind(this);
  }

  removeDisplay(name) {
    if (name === "Weeks") {
      this.state.weeks = "false"
      this.forceUpdate();
    } else if (name === "Months") {
      this.state.months = "false"
      this.forceUpdate();
    } else if (name === "Years") {
      this.state.years = "false"
      this.forceUpdate();
    } else if (name === "Seasons") {
      this.state.seasons = "false"
      this.forceUpdate();
    } else if (name === "Holidays") {
      this.state.holidays = "false"
      this.forceUpdate();
    } else {
      this.state.timeline = "false"
      this.forceUpdate();
    }
  }

  addDisplay(name) {
    if (name === "Weeks") {
      this.state.weeks = "true"
      this.forceUpdate();
    } else if (name === "Months") {
      this.state.months = "true"
      this.forceUpdate();
    } else if (name === "Years") {
      this.state.years = "true"
      this.forceUpdate();
    } else if (name === "Seasons") {
      this.state.seasons = "true"
      this.forceUpdate();
    } else if (name === "Holidays") {
      this.state.holidays = "true"
      this.forceUpdate();
    } else {
      this.state.timeline = "true"
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <CalendarApp weeks={this.state.weeks} months={this.state.months} years={this.state.years} seasons={this.state.seasons} holidays={this.state.holidays} timeline={this.state.timeline}/>
        <CalendarSidebar removeDisplay={this.removeDisplay} addDisplay={this.addDisplay}/>
      </div>
    );
  }
}
