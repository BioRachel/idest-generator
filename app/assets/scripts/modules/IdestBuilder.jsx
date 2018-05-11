import React from 'react';









export class IdestBuilder extends React.Component {
  render() {
    if (this.props.selectedMajorRunes.length === 1) {
      switch(this.props.selectedOtherRunes.length) {

        case 1:
          return (
            <div>
              <div class="ring"></div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-one">
                <div class={this.props.selectedOtherRunes[0]}></div>
              </div>
            </div>
          );
          break;

        case 2:
          return (
            <div>
              <div class="ring"></div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-one">
                <div class={this.props.selectedOtherRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-two">
                <div class={this.props.selectedOtherRunes[1]}></div>
              </div>
            </div>
          );
          break;

        case 3:
          return (
            <div>
              <div class="ring"></div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-one">
                <div class={this.props.selectedOtherRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-five">
                <div class={this.props.selectedOtherRunes[1]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-six">
                <div class={this.props.selectedOtherRunes[2]}></div>
              </div>
            </div>
          );
          break;

        case 4:
          return (
            <div>
              <div class="ring"></div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-one">
                <div class={this.props.selectedOtherRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-two">
                <div class={this.props.selectedOtherRunes[1]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-three">
                <div class={this.props.selectedOtherRunes[2]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-four">
                <div class={this.props.selectedOtherRunes[3]}></div>
              </div>
            </div>
          );
          break;

        case 5:
          return (
            <div>
              <div class="ring"></div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-one">
                <div class={this.props.selectedOtherRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-three">
                <div class={this.props.selectedOtherRunes[1]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-four">
                <div class={this.props.selectedOtherRunes[2]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-seven">
                <div class={this.props.selectedOtherRunes[3]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-eight">
                <div class={this.props.selectedOtherRunes[4]}></div>
              </div>
            </div>
          );
          break;

        case 6:
          return (
            <div>
              <div class="ring"></div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-one">
                <div class={this.props.selectedOtherRunes[0]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-two">
                <div class={this.props.selectedOtherRunes[1]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-nine">
                <div class={this.props.selectedOtherRunes[2]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-ten">
                <div class={this.props.selectedOtherRunes[3]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-eleven">
                <div class={this.props.selectedOtherRunes[4]}></div>
              </div>
              <div class="default-other-one default-other-one__spot-twelve">
                <div class={this.props.selectedOtherRunes[5]}></div>
              </div>
            </div>
          );
          break;


        default:
          return (
            <div>
              <div class="ring"></div>
              <div class="default-major">
                <div class={this.props.selectedMajorRunes[0]}></div>
              </div>
            </div>
          );
          break;
        }

  } else if (this.props.selectedMajorRunes.length === 2) {
    switch(this.props.selectedOtherRunes.length) {

      case 1:
        return (
          <div>
            <div class="oval-2"></div>
            <div class="verticalLine"></div>
            <div class="default-major default-major__first-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__second-two">
              <div class={this.props.selectedMajorRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-one">
              <div class={this.props.selectedOtherRunes[0]}></div>
            </div>
          </div>
        );
        break;

      case 2:
        return (
          <div>
            <div class="oval-2"></div>
            <div class="verticalLine"></div>
            <div class="default-major default-major__first-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__second-two">
              <div class={this.props.selectedMajorRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-two">
              <div class={this.props.selectedOtherRunes[0]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-three">
              <div class={this.props.selectedOtherRunes[1]}></div>
            </div>
          </div>
        );
        break;

      case 3:
        return (
          <div>
            <div class="oval-2"></div>
            <div class="verticalLine"></div>
            <div class="default-major default-major__first-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__second-two">
              <div class={this.props.selectedMajorRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-one">
              <div class={this.props.selectedOtherRunes[0]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-four">
              <div class={this.props.selectedOtherRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-five">
              <div class={this.props.selectedOtherRunes[2]}></div>
            </div>
          </div>
        );
        break;

      case 4:
        return (
          <div>
            <div class="oval"></div>
            <div class="default-major default-major__third-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__fourth-two">
              <div class={this.props.selectedMajorRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-six-2">
              <div class={this.props.selectedOtherRunes[0]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-seven-2">
              <div class={this.props.selectedOtherRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-eight-2">
              <div class={this.props.selectedOtherRunes[2]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-nine-2">
              <div class={this.props.selectedOtherRunes[3]}></div>
            </div>
          </div>
        );
        break;

      case 5:
        return (
          <div>
            <div class="oval-2"></div>
            <div class="verticalLine"></div>
            <div class="default-major default-major__first-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__second-two">
              <div class={this.props.selectedMajorRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-six">
              <div class={this.props.selectedOtherRunes[0]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-seven">
              <div class={this.props.selectedOtherRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-eight">
              <div class={this.props.selectedOtherRunes[2]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-nine">
              <div class={this.props.selectedOtherRunes[3]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-one">
              <div class={this.props.selectedOtherRunes[4]}></div>
            </div>
          </div>
        );
        break;

      case 6:
        return (
          <div>
            <div class="oval"></div>
            <div class="default-major default-major__third-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__fourth-two">
              <div class={this.props.selectedMajorRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-six-2">
              <div class={this.props.selectedOtherRunes[0]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-seven-2">
              <div class={this.props.selectedOtherRunes[1]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-eight-2">
              <div class={this.props.selectedOtherRunes[2]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-nine-2">
              <div class={this.props.selectedOtherRunes[3]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-ten-2">
              <div class={this.props.selectedOtherRunes[4]}></div>
            </div>
            <div class="default-other-two default-other-two__spot-eleven-2">
              <div class={this.props.selectedOtherRunes[5]}></div>
            </div>
          </div>
        );
        break;

      default:
        return (
          <div>
            <div class="oval-2"></div>
            <div class="default-major default-major__fifth-two">
              <div class={this.props.selectedMajorRunes[0]}></div>
            </div>
            <div class="default-major default-major__sixth-two">
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
