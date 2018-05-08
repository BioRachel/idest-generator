import React from 'react';
import { MajorRunes } from './MajorRunes.jsx';
import { InterRunes } from './InterRunes.jsx';
import { MinorRunes } from './MinorRunes.jsx';

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
    this.state.MajorRunes.push(runes);
    this.forceUpdate();
    alert(`Major: ${this.state.MajorRunes}, Inter: ${this.state.InterRunes}, Minor: ${this.state.MinorRunes}`);
  }

  updateInterRunesSelected(runes) {
    this.state.InterRunes.push(runes);
    this.forceUpdate();
    alert(`Major: ${this.state.MajorRunes}, Inter: ${this.state.InterRunes}, Minor: ${this.state.MinorRunes}`);
  }

  updateMinRunesSelected(runes) {
    this.state.MinorRunes.push(runes);
    this.forceUpdate();
    alert(`Major: ${this.state.MajorRunes}, Inter: ${this.state.InterRunes}, Minor: ${this.state.MinorRunes}`);
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
          <div class="default-major default-major__first-two">
          </div>
          <div class="default-major default-major__second-two">
          </div>
          <div class="default-other-two default-other-two__spot-one"><p>1</p>
          </div>
          <div class="default-other-two default-other-two__spot-four"><p>2</p>
          </div>
          <div class="default-other-two default-other-two__spot-five"><p>3</p>
          </div>

        </div>
      </div>
    );
  }
}
