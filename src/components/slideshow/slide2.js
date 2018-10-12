import React from 'react';
import { Link } from 'react-router-dom';
import './slide.scss';


class Slide2 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide2">
        <img className="pic" src={require('./beach.jpg')} />
      </div>
    );
  }
}

export default Slide2;
