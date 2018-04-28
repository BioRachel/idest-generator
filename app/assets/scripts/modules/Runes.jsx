import React from 'react';
import { MajorRunes } from './MajorRunes.jsx';
import { InterRunes } from './InterRunes.jsx';
import { MinorRunes } from './MinorRunes.jsx';

export class Runes extends React.Component {
  render() {
    return (
      <div class="site-sidebar">
        <div class="sidebar-ghost">
          <div class="sidebar-top-slot">
            <MajorRunes />
          </div>
          <div class="sidebar-middle-slot">
            <InterRunes />
          </div>
          <div class="sidebar-bottom-slot">
            <MinorRunes />
          </div>
        </div>
      </div>
    );
  }
}
