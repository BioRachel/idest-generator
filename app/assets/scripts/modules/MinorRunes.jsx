import React from 'react';
import { MinorRuneContainer } from './MinorRuneContainer.jsx';
import Button from './Buttons.jsx';

export class MinorRunes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMinorRunes: [],
      minorRunesSelected: 0
    }
    this.addClicks = this.addClicks.bind(this);
    this.dropClicks = this.dropClicks.bind(this);
  }

  addClicks(name) {
    let currentClicks = this.state.minorRunesSelected;
    this.state.minorRunesSelected = currentClicks + 1;
    this.state.activeMinorRunes.push(name);
    this.forceUpdate();
    alert(`${this.state.activeMinorRunes}, ${this.state.minorRunesSelected}`);
  }


  dropClicks(name) {
    let theClicks = this.state.minorRunesSelected;
    let position = this.state.activeMinorRunes.indexOf(name);
    this.state.minorRunesSelected = theClicks - 1;
    this.state.activeMinorRunes.splice(position, 1);
    this.forceUpdate();
    alert(`${this.state.activeMinorRunes}, ${this.state.minorRunesSelected}`);
  }


  render() {
    return (
      <div>
        <div class="button-row">
          <MinorRuneContainer name="Solid" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Liquid" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Gas" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>


        <div class="button-row">
          <MinorRuneContainer name="Sharp" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Smooth" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Small" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>


        <div class="button-row">
          <MinorRuneContainer name="Large" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Area" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Target" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>

        <div class="button-row">
          <MinorRuneContainer name="Fast" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Slow" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Multiple" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>

        <div class="button-row">
          <MinorRuneContainer name="Shape" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>
      </div>
    );
  }
}
