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

      <div className="header">
        <div className="dropdown">
          <Link to="/">
            <button className="dropbtn">Home</button>
          </Link>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Blog</button>
          <div className="dropdown-content">
            <Link to="/blog/new-post">New post</Link>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Projects</button>
          <div className="dropdown-content">
            <Link to="/reactprojects">React Projects</Link>
          </div>
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
    );
  }
}

export default Header;
