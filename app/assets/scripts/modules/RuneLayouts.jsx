import React from 'react';

export class TwoMajRune extends React.Component {
  render() {
    return (
        <div class="idest-section__idest-area">
          <div class="major-rune major-rune__top-left"></div>
          <div class="major-rune major-rune__bottom-right"></div>
          <div class="inter-rune inter-rune__top-right"></div>
          <div class="inter-rune inter-rune__bottom-left"></div>
        </div>
    );
  }
}

export class OneMajRune extends React.Component {
  render() {
    return (
        <div class="idest-section__idest-area">
          <div class="major-rune major-rune__middle"></div>
          <div class="inter-rune inter-rune__top-middle"></div>
          <div class="inter-rune inter-rune__middle-right"></div>
          <div class="inter-rune inter-rune__bottom-middle"></div>
          <div class="inter-rune inter-rune__middle-left"></div>
        </div>
    );
  }
}
