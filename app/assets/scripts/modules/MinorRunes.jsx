import React from 'react';
import { MinorRuneContainer } from './MinorRuneContainer.jsx';
import { Button } from './Buttons.jsx';

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
    this.props.update(name);
    this.forceUpdate();
  }


  dropClicks(name) {
    let theClicks = this.state.minorRunesSelected;
    let position = this.state.activeMinorRunes.indexOf(name);
    this.state.minorRunesSelected = theClicks - 1;
    this.state.activeMinorRunes.splice(position, 1);
    this.forceUpdate();
  }


  render() {
    return (
      <div>

        <div class="heading">
          <p>Minor Runes</p>
        </div>

        <div class="rune-selector-area--intermediate">

            <MinorRuneContainer name="Solid" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Liquid" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Gas" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>




            <MinorRuneContainer name="Sharp" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Smooth" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Small" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>



            <MinorRuneContainer name="Large" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Area" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Target" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>



            <MinorRuneContainer name="Fast" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Slow" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>
            <MinorRuneContainer name="Multiple" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>



            <MinorRuneContainer name="Shape" addClicks={this.addClicks} dropClicks={this.dropClicks} activeMinorRunes={this.state.activeMinorRunes} minorRunesSelected={this.state.minorRunesSelected}/>

        </div>
      </div>
    );
  }
}
