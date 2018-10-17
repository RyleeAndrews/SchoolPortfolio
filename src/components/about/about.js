import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import Slider from '../slideshow/slider.js';
import { Link } from 'react-router-dom';
import './about.scss';

class About extends React.Component {
  constructor(props){
    super(props);


    this.state = {};
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
          <p className="aboutP"> Hello my name is Rylee Andrews and I am full stack JavaScript developer from Northwest Montana.
            I enjoy spending time outdoors all season and spending winters waist deep in some Montana coldsmoke.
            I have been involved in business and sold thousands of dollars in profit while interning as a
            branch manager. My involvings with coding started while I was living in one of the epicenters of it all, Seattle.
            I earned my certification in the trade at Code Fellows in downtown Seattle. This oppurtunity has opened
            many doors for me creative wise and allows me to bring my thoughts to designs. I have always had
            a love for creating designs clothing wise, so the passion for bringing things to conception digitally
            is there. What sets me apart from the pack is my thirst to always evolve. I am always looking for new
            ways to display beautiful interfaces and to keep building the very best product. Through my many trials
            I strive to bring the best to you, with great positive energy. That positive energy is something that also
            sets me apart. I work well with others and want to see everyone grow. Working alone I set goals and achieve them.
            Working with clients I always want to make sure they are one hundred percent involved. With full understading
            we can work quickly and proficiently on the project. This portfolio will display what I am capable of and what
            I can provide. Beautiful layouts and simple designs is my personal flavor of designing.
          </p>
          <Slider className="slider"/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default About;
