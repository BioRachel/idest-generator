import React from 'react';
import { Button, ButtonRight } from './Buttons.jsx';



export class SiteHeader extends React.Component {
  render() {
    return (
    <header class="site-sidebar">

      <div class="heading">
        <h1>Major Runes</h1>
      </div>

      <div class="rune-selector-area">
        <div class="button-row">
          <Button name="Fire" />
          <Button name="Earth" />
          <ButtonRight name="Water" />
        </div>

        <div class="button-row">
          <Button name="Air" />
          <Button name="Life" />
          <ButtonRight name="Death" />
        </div>

        <div class="button-row">
          <Button name="Chaos" />
          <Button name="Order" />
          <ButtonRight name="Knowledge" />
        </div>

        <div class="button-row">
          <Button name="Faith" />
          <Button name="Nature" />
          <ButtonRight name="Artifice" />
        </div>

        <div class="button-row">
          <Button name="Self" />
          <ButtonRight name="Other" />
        </div>
      </div>

      <div class="heading">
        <h1>Intermediate Runes</h1>
      </div>

      <div class="rune-selector-area">
        <div class="button-row">
          <button class="rune-button"><p>Self</p></button>
          <button class="rune-button"><p>Other</p></button>
          <button class="rune-button"><p>Storage</p></button>
        </div>

        <div class="button-row">
          <button class="rune-button"><p>instant</p></button>
          <button class="rune-button"><p>Duration</p></button>
          <button class="rune-button"><p>Channel</p></button>
        </div>

        <div class="button-row">
          <button class="rune-button"><p>Snare</p></button>
          <button class="rune-button"><p>Shape</p></button>
          <button class="rune-button"><p>Transform</p></button>
        </div>

        <div class="button-row">
          <button class="rune-button"><p>Create</p></button>
          <button class="rune-button"><p>Destroy</p></button>
          <button class="rune-button"><p>Control</p></button>
        </div>

      </div>

      <div class="heading">
        <h1>Minor Runes</h1>
      </div>

      <div class="rune-selector-area">
        <div class="button-row">
          <button class="rune-button"><p>Solid</p></button>
          <button class="rune-button"><p>Liquid</p></button>
          <button class="rune-button"><p>Gas</p></button>
        </div>
        <div class="button-row">
          <button class="rune-button"><p>Sharp</p></button>
          <button class="rune-button"><p>Smooth</p></button>
          <button class="rune-button"><p>Small</p></button>
        </div>

        <div class="button-row">
          <button class="rune-button"><p>Large</p></button>
          <button class="rune-button"><p>Fast</p></button>
          <button class="rune-button"><p>Slow</p></button>
        </div>

        <div class="button-row">
          <button class="rune-button"><p>Snare</p></button>
          <button class="rune-button"><p>Target</p></button>
          <button class="rune-button"><p>Transform</p></button>
        </div>

        <div class="button-row">
          <button class="rune-button"><p>Area</p></button>
          <button class="rune-button rune-button--last"><p>Shape</p></button>
        </div>
      </div>

    </header>
  );
  }
}
