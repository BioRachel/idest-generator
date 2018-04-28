import React from 'react';
import { Years, Seasons, Holidays, Timeline, Weeks, Months } from './ImageComponents.jsx';

export class CalendarApp extends React.Component {
  render() {
    return (
      <div class="calendar">
        <Years selected={this.props.years} />
        <Seasons selected={this.props.seasons}  />
        <Holidays selected={this.props.holidays}  />
        <Timeline selected={this.props.timeline}  />
        <Weeks selected={this.props.weeks}  />
        <Months selected={this.props.months}  />
      </div>
    );
  }
}
