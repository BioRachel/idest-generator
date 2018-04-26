import React from 'react';
import { InterRuneContainer } from './InterRuneContainer.jsx';
import Button from './Buttons.jsx';

export class InterRunes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeInterRunes: [],
      interRunesSelected: 0
    }
    this.addClicks = this.addClicks.bind(this);
    this.dropClicks = this.dropClicks.bind(this);
  }

  addClicks(name) {
    let currentClicks = this.state.interRunesSelected;
    this.state.interRunesSelected = currentClicks + 1;
    this.state.activeInterRunes.push(name);
    this.forceUpdate();
    alert(`${this.state.activeInterRunes}, ${this.state.interRunesSelected}`);
  }


  dropClicks(name) {
    let theClicks = this.state.interRunesSelected;
    let position = this.state.activeInterRunes.indexOf(name);
    this.state.interRunesSelected = theClicks - 1;
    this.state.activeInterRunes.splice(position, 1);
    this.forceUpdate();
    alert(`${this.state.activeInterRunes}, ${this.state.interRunesSelected}`);
  }


  render() {
    return (
      <div>
        <div class="button-row">
          <InterRuneContainer name="Fire" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Air" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="water" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>


        <div class="button-row">
          <InterRuneContainer name="Earth" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Life" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Death" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>


        <div class="button-row">
          <InterRuneContainer name="Mind" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Body" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Knowledge" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>

        <div class="button-row">
          <InterRuneContainer name="Faith" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Chaos" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Order" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>

        <div class="button-row">
          <InterRuneContainer name="Nature" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Artifice" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>
      </div>
    );
  }
}
