import './header.scss';
import { Link } from 'react-router-dom';
import React from 'react';


class HomeHeader extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(

      <div className="headerHome">
        <img className="topPhoto" src={require('./trippyPhotos.jpg')}/>
        <div className="header">
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
      </div>
    );
  }
}

export default HomeHeader;
