import React from 'react';
import { Link } from 'react-router-dom';
import './slide.scss';


class Slide1 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide1">
        <img className="pic" src={require('./lit.jpg')} />
      </div>
    );
  }
}

export default Slide1;
