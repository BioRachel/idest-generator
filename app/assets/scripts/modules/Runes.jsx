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
      InterRunes: [],
      MinorRunes: []
    }
    this.updateMajRunesSelected = this.updateMajRunesSelected.bind(this);
    this.updateInterRunesSelected = this.updateInterRunesSelected.bind(this);
    this.updateMinRunesSelected = this.updateMinRunesSelected.bind(this);
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

  updateInterRunesSelected(runes) {
    if (this.state.InterRunes.includes(runes)) {
      let position = this.state.InterRunes.indexOf(runes);
      this.state.InterRunes.splice(position, 1);
      this.forceUpdate();
    } else {
      this.state.InterRunes.push(runes);
      this.forceUpdate();
    }
  }

  updateMinRunesSelected(runes) {
    if (this.state.MinorRunes.includes(runes)) {
      let position = this.state.MinorRunes.indexOf(runes);
      this.state.MinorRunes.splice(position, 1);
      this.forceUpdate();
    } else {
      this.state.MinorRunes.push(runes);
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div>
        <div class="site-sidebar">
          <div class="sidebar-ghost">
            <div class="sidebar-top-slot">
              <MajorRunes update={this.updateMajRunesSelected}/>
            </div>
            <div class="sidebar-middle-slot">
              <InterRunes update={this.updateInterRunesSelected}/>
            </div>
            <div class="sidebar-bottom-slot">
              <MinorRunes update={this.updateMinRunesSelected}/>
            </div>
          </div>
        </div>
        <div class="idest-spot">
          <IdestBuilder selectedMajorRunes={this.state.MajorRunes} selectedInterRunes={this.state.InterRunes} selectedMinorRunes={this.state.MinorRunes}/>
        </div>
      </div>
    );
  }
}
