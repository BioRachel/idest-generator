import React from 'react';
import { MajorRunes } from './MajorRunes.jsx';
import { InterRunes } from './InterRunes.jsx';
import { MinorRunes } from './MinorRunes.jsx';
import { IdestBuilder } from './IdestBuilder.jsx';

export class Runes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MajorRunes: [],
      OtherRunes: []
    }
    this.updateMajRunesSelected = this.updateMajRunesSelected.bind(this);
    this.updateOtherRunesSelected = this.updateOtherRunesSelected.bind(this);
  }

  updateMajRunesSelected(runes) {
    if (this.state.MajorRunes.includes(runes)) {
      let position = this.state.MajorRunes.indexOf(runes);
      this.state.MajorRunes.splice(position, 1);
      this.forceUpdate();
    } else {
      this.state.MajorRunes.push(runes);
      this.forceUpdate();
    }
  }

  updateOtherRunesSelected(runes) {
    if (this.state.OtherRunes.includes(runes)) {
      let position = this.state.OtherRunes.indexOf(runes);
      this.state.OtherRunes.splice(position, 1);
      this.forceUpdate();
    } else {
      this.state.OtherRunes.push(runes);
      this.forceUpdate();
    }
  }


  render() {
    return (
      <div>
        <div class="site-sidebar">
          <div class="sidebar-ghost">
            <div class="sidebar-top-slot">
              <MajorRunes update={this.updateMajRunesSelected} />
            </div>
            <div class="sidebar-middle-slot">
              <InterRunes update={this.updateOtherRunesSelected} otherRunes={this.state.OtherRunes.length} />
            </div>
            <div class="sidebar-bottom-slot">
              <MinorRunes update={this.updateOtherRunesSelected} otherRunes={this.state.OtherRunes.length} />
            </div>
          </div>
        </div>
        <div class="idest-spot">
          <IdestBuilder selectedMajorRunes={this.state.MajorRunes} selectedOtherRunes={this.state.OtherRunes} />
        </div>
      </div>
    );
  }
}
