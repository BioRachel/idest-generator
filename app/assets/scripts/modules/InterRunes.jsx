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
          <InterRuneContainer name="Self" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Other" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Storage" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>


        <div class="button-row">
          <InterRuneContainer name="Instant" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Duration" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Channel" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>


        <div class="button-row">
          <InterRuneContainer name="Create" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Destroy" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Control" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>

        <div class="button-row">
          <InterRuneContainer name="Shape" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Transform" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
          <InterRuneContainer name="Snare" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected}/>
        </div>

      </div>
    );
  }
}
