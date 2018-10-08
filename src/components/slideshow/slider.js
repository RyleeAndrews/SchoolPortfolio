import React from 'react';
import './slide.scss';
import Slide1 from './slide1.js';


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

        }
        </div>
      </div>
    );
  }
}
