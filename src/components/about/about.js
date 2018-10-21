import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Slider from '../slideshow/slider.js';
import { Link } from 'react-router-dom';
import './about.scss';

class About extends React.Component {
  constructor(props){
    super(props);


    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.clearIntervalSet = this.clearIntervalSet.bind(this);
    this.setStateBack = this.setStateBack.bind(this);
    this.state = {
      slideCount: 1,
    };
  }

  UNSAFE_componentWillMount(){
    if(this.state.slideCount < 4){
      this.timer = setInterval(this.nextSlide, 4000);
    }
  }

  clearIntervalSet(){
    clearInterval(this.timer);
  }

  setStateBack(){
    this.setState({slideCount: this.state.slideCount === 1});
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
        <div className="headAbout">
          <div className="dropdown">
            <Link to="/">
              <button className="dropbtn">Home</button>
            </Link>
          </div>
          <div className="dropdown">
            <Link to="/about">
              <button className="dropbtn">About</button>
            </Link>
          </div>
          <div className="dropdown">
            <Link to="/contact">
              <button className="dropbtn">Contact</button>
            </Link>
          </div>
        </div>
        <h3> About Me </h3>
        <div className="wrapper">
          <p className="aboutP1"> Hello my name is Rylee Andrews and I am full stack JavaScript developer from Northwest Montana.
            I enjoy spending time outdoors all season and spending winters waist deep in some Montana coldsmoke.
          </p>
          {
            this.state.slideCount === 1 ?
              <img className="picabout" src={require('./powpow.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 2 ?
              <img className="picabout" src={require('./skiski.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 3 ?
              <img className="picabout" src={require('./skiskiski.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 4 ?
              this.setStateBack()
              :
              null
          }
        </div>
        <div className="wrapper2">
          <p className="aboutP2">
            I have been involved in business and sold thousands of dollars in profit while interning as a branch manager
            for a painting business.
          </p>
          {
            this.state.slideCount === 1 ?
              <img className="picabout" src={require('./painting1.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 2 ?
              <img className="picabout" src={require('./painting2.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 3 ?
              <img className="picabout" src={require('./painting3.jpg')} />
              :
              null
          }
        </div>
        <div className="wrapper3">
          <p className="aboutP3">
            My involvings with coding started while I was living in one of the epicenters of it all, Seattle.
            I earned my certification in the trade at Code Fellows in downtown Seattle. This oppurtunity has opened
            many doors for me creative wise and allows me to bring my thoughts to designs. I have always had
            a love for creating designs clothing wise, so the passion for bringing things to conception digitally
            is there.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
