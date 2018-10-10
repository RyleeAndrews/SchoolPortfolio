import React from 'react';
import './slide.scss';
import Slide1 from './slide1.js';
import RightArrow from './rightArrow.js';
import LeftArrow from './leftArrow.js';
import Slide2 from './slide2.js';
import Slide3 from './slide3.js';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);

    this.state = {
      slideCount: 1,
    };
  }

  UNSAFE_componentWillMount(){
    this.timer = setInterval(this.nextSlide, 3000);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }

  render(){
    return(
      <div>
        <div className="slider">
          {
            this.state.slideCount === 1 ?
              <div>
                <Slide1/>
              </div>
              :
              null
          }
          {
            this.state.slideCount === 2 ?
              <div>
                <Slide2 />
              </div>
              :
              null
          }
          {
            this.state.slideCount === 3 ?
              <div>
                <Slide3 />
              </div>
              :
              null
          }
          {
            this.state.slideCount > 3 ?
              <div>
                <Slide3 />
              </div>
              :
              null
          }
        </div>
      </div>
    );
  }
}

export default Slider;
