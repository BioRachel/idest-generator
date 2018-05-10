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

        case 2:
          return (
            <div>
              <div class="default-major">
              </div>
              <div class="default-other-one default-other-one__spot-one">
              </div>
              <div class="default-other-one default-other-one__spot-two">
              </div>
            </div>
          );
          break;

        case 3:
          return (
            <div>
              <div class="default-major">
              </div>
              <div class="default-other-one default-other-one__spot-one">
              </div>
              <div class="default-other-one default-other-one__spot-five">
              </div>
              <div class="default-other-one default-other-one__spot-six">
              </div>
            </div>
          );
          break;

        case 4:
          return (
            <div>
              <div class="default-major">
              </div>
              <div class="default-other-one default-other-one__spot-one">
              </div>
              <div class="default-other-one default-other-one__spot-two">
              </div>
              <div class="default-other-one default-other-one__spot-three">
              </div>
              <div class="default-other-one default-other-one__spot-four">
              </div>
            </div>
          );
          break;

        case 5:
          return (
            <div>
              <div class="default-major">
              </div>
              <div class="default-other-one default-other-one__spot-one">
              </div>
              <div class="default-other-one default-other-one__spot-three">
              </div>
              <div class="default-other-one default-other-one__spot-four">
              </div>
              <div class="default-other-one default-other-one__spot-seven">
              </div>
              <div class="default-other-one default-other-one__spot-eight">
              </div>
            </div>
          );
          break;

        case 6:
          return (
            <div>
              <div class="default-major">
              </div>
              <div class="default-other-one default-other-one__spot-one">
              </div>
              <div class="default-other-one default-other-one__spot-two">
              </div>
              <div class="default-other-one default-other-one__spot-nine">
              </div>
              <div class="default-other-one default-other-one__spot-ten">
              </div>
              <div class="default-other-one default-other-one__spot-eleven">
              </div>
              <div class="default-other-one default-other-one__spot-twelve">
              </div>
            </div>
          );
          break;


        default:
          return (
            <div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
            </div>
          );
          break;
        }

  } else if (this.props.selectedMajorRunes.length === 2) {
    switch(this.props.selectedInterRunes.length + this.props.selectedMinorRunes.length) {

      case 1:
        return (
          <div>
            <div class="default-major default-major__first-two">
            </div>
            <div class="default-major default-major__second-two">
            </div>
            <div class="default-other-two default-other-two__spot-one">
            </div>
          </div>
        );
        break;

      case 2:
        return (
          <div>
            <div class="default-major default-major__first-two">
            </div>
            <div class="default-major default-major__second-two">
            </div>
            <div class="default-other-two default-other-two__spot-two">
            </div>
            <div class="default-other-two default-other-two__spot-three">
            </div>
          </div>
        );
        break;

      case 3:
        return (
          <div>
            <div class="default-major default-major__first-two">
            </div>
            <div class="default-major default-major__second-two">
            </div>
            <div class="default-other-two default-other-two__spot-one">
            </div>
            <div class="default-other-two default-other-two__spot-four">
            </div>
            <div class="default-other-two default-other-two__spot-five">
            </div>
          </div>
        );
        break;

      case 4:
        return (
          <div>
            <div class="default-major default-major__third-two">
            </div>
            <div class="default-major default-major__fourth-two">
            </div>
            <div class="default-other-two default-other-two__spot-six-2">
            </div>
            <div class="default-other-two default-other-two__spot-seven-2">
            </div>
            <div class="default-other-two default-other-two__spot-eight-2">
            </div>
            <div class="default-other-two default-other-two__spot-nine-2">
            </div>
          </div>
        );
        break;

      case 5:
        return (
          <div>
            <div class="default-major default-major__first-two">
            </div>
            <div class="default-major default-major__second-two">
            </div>
            <div class="default-other-two default-other-two__spot-six">
            </div>
            <div class="default-other-two default-other-two__spot-seven">
            </div>
            <div class="default-other-two default-other-two__spot-eight">
            </div>
            <div class="default-other-two default-other-two__spot-nine">
            </div>
            <div class="default-other-two default-other-two__spot-one">
            </div>
          </div>
        );
        break;

      case 6:
        return (
          <div>
            <div class="default-major default-major__third-two">
            </div>
            <div class="default-major default-major__fourth-two">
            </div>
            <div class="default-other-two default-other-two__spot-six-2">
            </div>
            <div class="default-other-two default-other-two__spot-seven-2">
            </div>
            <div class="default-other-two default-other-two__spot-eight-2">
            </div>
            <div class="default-other-two default-other-two__spot-nine-2">
            </div>
            <div class="default-other-two default-other-two__spot-ten-2">
            </div>
            <div class="default-other-two default-other-two__spot-eleven-2">
            </div>
          </div>
        );
        break;

      default:
        return (
          <div>
            <div class="default-major default-major__third-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__fourth-two">
              <div class={this.props.selectedMajorRunes[1]}></div>
            </div>
          </div>
        );
        break;
    }
  } else {
    return (
      <div>
      </div>
    );
  }


  }
}
