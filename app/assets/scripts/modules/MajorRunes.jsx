import React from 'react';
import { MajorRuneContainer } from './MajorRuneContainer.jsx';
import { Button } from './Buttons.jsx';

export class MajorRunes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMajorRunes: [],
      majorRunesSelected: 0
    }
    this.addClicks = this.addClicks.bind(this);
    this.dropClicks = this.dropClicks.bind(this);
  }

  addClicks(name) {
    let currentClicks = this.state.majorRunesSelected;
    this.state.majorRunesSelected = currentClicks + 1;
    this.state.activeMajorRunes.push(name);
    this.forceUpdate();
    alert(`${this.state.activeMajorRunes}, ${this.state.majorRunesSelected}`);
  }


  dropClicks(name) {
    let theClicks = this.state.majorRunesSelected;
    let position = this.state.activeMajorRunes.indexOf(name);
    this.state.majorRunesSelected = theClicks - 1;
    this.state.activeMajorRunes.splice(position, 1);
    this.forceUpdate();
    alert(`${this.state.activeMajorRunes}, ${this.state.majorRunesSelected}`);
  }


  render() {
    return (
      <div>
      <div class="heading">
        <h1>Major Runes</h1>
      </div>
        <div class="rune-selector-area">
          <div class="button-row">
            <MajorRuneContainer name="Fire" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Air" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="water" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
          </div>


          <div class="button-row">
            <MajorRuneContainer name="Earth" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Life" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Death" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
          </div>


          <div class="button-row">
            <MajorRuneContainer name="Mind" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Body" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Knowledge" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
          </div>

          <div class="button-row">
            <MajorRuneContainer name="Faith" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Chaos" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Order" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
          </div>

          <div class="button-row">
            <MajorRuneContainer name="Nature" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
            <MajorRuneContainer name="Artifice" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMajorRunes={this.state.activeMajorRunes} majorRunesSelected={this.state.majorRunesSelected}/>
          </div>
        </div>
        </div>
    );
  }
}
