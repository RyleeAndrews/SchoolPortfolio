import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Slider from '../slideshow/slider.js';
import { Link } from 'react-router-dom';
import './about.scss';

class About extends React.Component {
  constructor(props){
    super(props);

    this.slideTimer = this.slideTimer.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.unTimer = this.unTimer.bind(this);

    this.state = {
      slideCount: 1,
    };
  }

  slideTimer(){
    this.timer = setInterval(this.nextSlide, 4000);
  }

  nextSlide(){
    this.setState({ slideCount: this.state.slideCount + 1});
  }

  unTimer(){
    clearInterval(this.timer);
  }

  render(){

    return(
      <div>
        <Header />
        <h3> About Me </h3>
        <div className="wrapper">
          <p className="aboutP1"> Hello my name is Rylee Andrews and I am full stack JavaScript developer from Northwest Montana.
            I enjoy spending time outdoors all season and spending winters waist deep in some Montana coldsmoke.
          </p>
          {
            this.state.slideCount === 1 ?
              <div>
                {this.slideTimer()}
                <img className="picabout" src={require('./powpow.jpg')} />
              </div>
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
              <div>
                {this.unTimer()}
                <img className="picabout" src={require('./skiskiski.jpg')} />
              </div>
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
              <img className="picabout2" src={require('./painting1.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 2 ?
              <img className="picabout2" src={require('./painting2.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 3 ?
              <img className="picabout2" src={require('./painting3.jpg')} />
              :
              null
          }
        </div>
        <div className="wrapper3">
          <p className="aboutP3">
            My involvement with coding started while I was living in one of the epicenters of it all, Seattle.
            I earned my certification in the trade at Code Fellows in downtown Seattle. This oppurtunity has opened
            many doors for me creative wise and allows me to bring my thoughts to designs. I have always had
            a love for creating designs clothing wise, so the passion for bringing things to conception digitally
            is there.
          </p>
          {
            this.state.slideCount === 1 ?
              <img className="picabout3" src={require('./seattle.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 2 ?
              <img className="picaboutdif" src={require('./seattle6.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 3 ?
              <img className="picabout3" src={require('./seattle3.jpg')} />
              :
              null
          }

        </div>
        <div className="wrapper4">
          <p className="aboutP4">
            What sets me apart from the pack is my thirst to always evolve. I am always looking for new
            ways to display beautiful interfaces and to keep building the very best product. Through my many trials
            I strive to bring the best to you, with great positive energy. That positive energy is something that also
            sets me apart.
          </p>
          {
            this.state.slideCount === 1 ?
              <img className="picabout4" src={require('./rylee.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 2 ?
              <img className="picabout4" src={require('./rylee2.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 3 ?
              <img className="picabout4" src={require('./rylee3.jpg')} />
              :
              null
          }
        </div>
        <div className="wrapper5">
          <p className="aboutP5">
            I work well with others and want to see everyone grow. Working alone I set goals and achieve them.
            Working with clients I always want to make sure they are one hundred percent involved. With full understading
            we can work quickly and proficiently on the project. This portfolio will display what I am capable of and what
            I can provide. Beautiful layouts and simple designs is my personal flavor of designing.
          </p>
          {
            this.state.slideCount === 1 ?
              <img className="picabout5" src={require('./me.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 2 ?
              <img className="picabout5" src={require('./me2.jpg')} />
              :
              null
          }
          {
            this.state.slideCount === 3 ?
              <img className="picabout5" src={require('./me3.jpg')} />
              :
              null
          }
        </div>
      </div>
    );
  }
}

export default About;
