import React from 'react';
import { CalendarButtonContainer } from './CalendarButtonSection.jsx';

export class CalendarSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.sendUpRemove = this.sendUpRemove.bind(this);
    this.sendUpAdd = this.sendUpAdd.bind(this);
  }

  sendUpRemove(name) {
    this.props.removeDisplay(name);
  }

  sendUpAdd(name) {
    this.props.addDisplay(name);
  }


  render() {
    return (
      <div class="sidebar-ghost">
        <div class="calendar-sidebar">
          <div class="heading heading--calendar">
            <p>Show me...</p>
          </div>
          <CalendarButtonContainer name="Weeks" sendUpRemove={this.sendUpRemove} sendUpAdd={this.sendUpAdd}/>
          <CalendarButtonContainer name="Months" sendUpRemove={this.sendUpRemove} sendUpAdd={this.sendUpAdd}/>
          <CalendarButtonContainer name="Years" sendUpRemove={this.sendUpRemove} sendUpAdd={this.sendUpAdd}/>
          <CalendarButtonContainer name="Seasons" sendUpRemove={this.sendUpRemove} sendUpAdd={this.sendUpAdd}/>
          <CalendarButtonContainer name="Holidays" sendUpRemove={this.sendUpRemove} sendUpAdd={this.sendUpAdd}/>
          <CalendarButtonContainer name="Timeline" sendUpRemove={this.sendUpRemove} sendUpAdd={this.sendUpAdd}/>
        </div>
      </div>
    );
  }
}
