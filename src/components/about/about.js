import React from 'react';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import './about.scss';

class About extends React.Component {
  constructor(props){
    super(props);


    this.state = {};
  }
  render(){
    return(
      <div>
        <Header/>
        <h3> About Me </h3>
        <img src={require('./me.jpg')} />
        <p>Beautiful layouts and simple designs is my personal flavor of designing.</p>
        <Footer/>
      </div>
    );
  }
}

export default About;
