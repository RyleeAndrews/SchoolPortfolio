import './header.scss';
import { Link } from 'react-router-dom';
import React from 'react';


class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(

      <div className="header1">
        <div className="dropdown1">
          <Link to="/">
            <button className="dropbtn1">Home</button>
          </Link>
        </div>
        <div className="dropdown1">
          <Link to="/about">
            <button className="dropbtn1">About</button>
          </Link>
        </div>
        <div className="dropdown1">
          <Link to="/adobespark">
            <button className="dropbtn1">Adobe Spark Story</button>
          </Link>
        </div>
        <div className="dropdown1">
          <Link to="/projects">
            <button className="dropbtn1">Projects</button>
          </Link>
        </div>
        <div className="dropdown1">
          <Link to="/contact">
            <button className="dropbtn1">Contact</button>
          </Link>
        </div>
        <div className="dropdown1">
          <Link to="/category">
            <button className="dropbtn1"> Categories </button>
          </Link>
          <div className="dropdown1-content">
            <Link to="/beer">
              <div> Beer </div>
            </Link>
            <Link to="/travel">
              <div> Travel </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
