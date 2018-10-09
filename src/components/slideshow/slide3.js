import React from 'react';
import { Link } from 'react-router-dom';
import './slide.scss';


class Slide3 extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="slide3">
        <img className="pic" src={require('./powpow.jpg')} />
      </div>
    );
  }
}

export default Slide3;
