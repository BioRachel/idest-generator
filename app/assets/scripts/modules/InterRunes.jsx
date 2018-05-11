import React from 'react';
import { InterRuneContainer } from './InterRuneContainer.jsx';
import { Button } from './Buttons.jsx';

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
    this.props.update(name);
    this.forceUpdate();
  }


  dropClicks(name) {
    let theClicks = this.state.interRunesSelected;
    let position = this.state.activeInterRunes.indexOf(name);
    this.state.interRunesSelected = theClicks - 1;
    this.state.activeInterRunes.splice(position, 1);
    this.props.update(name);
    this.forceUpdate();
  }


  render() {
    return (
      <div>

        <div class="heading heading--intermediate">
          <p>Intermediate Runes</p>
        </div>

        <div class="rune-selector-area--intermediate">

            <InterRuneContainer name="Self" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Other" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Storage" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />




            <InterRuneContainer name="Instant" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Duration" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Channel" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />




            <InterRuneContainer name="Create" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Destroy" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Control" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />



            <InterRuneContainer name="Shape" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Transform" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />
            <InterRuneContainer name="Snare" addClicks={this.addClicks} dropClicks={this.dropClicks} activeInterRunes={this.state.activeInterRunes} interRunesSelected={this.state.interRunesSelected} otherRunes={this.props.otherRunes} />

        </div>

      </div>
    );
  }
}
