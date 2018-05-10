import React from 'react';










export class IdestBuilder extends React.Component {
  render() {
    if (this.props.selectedMajorRunes.length === 1) {
      switch(this.props.selectedInterRunes.length + this.props.selectedMinorRunes.length) {
        case 1:
          return (
            <div>
              <div class="default-major">
              </div>
              <div class="default-other-one default-other-one__spot-one">
              </div>
            </div>
          );
          break;

          default:
            return (
              <div>
                <div class="default-major"></div>
              </div>
            );
        }

  } else {
    return (
      <div>
        <div class="default-major"></div>
      </div>
    )
  }


  }
}
