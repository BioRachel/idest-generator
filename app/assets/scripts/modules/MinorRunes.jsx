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
          <MinorRuneContainer name="Fire" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Air" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="water" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>


        <div class="button-row">
          <MinorRuneContainer name="Earth" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Life" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Death" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>


        <div class="button-row">
          <MinorRuneContainer name="Mind" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Body" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Knowledge" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>

        <div class="button-row">
          <MinorRuneContainer name="Faith" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Chaos" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Order" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>

        <div class="button-row">
          <MinorRuneContainer name="Nature" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
          <MinorRuneContainer name="Artifice" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
        </div>
      </div>
    );
  }
}
