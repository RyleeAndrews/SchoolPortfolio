import React from 'react';
import Header from '../header/header.js';
import { Link } from 'react-router-dom';
import './category.scss';

class Category extends React.Component {
  constructor(props){
    super(props);


    this.state = {};
  }
  render(){
    return(
      <div>
        <Header/>
        <div className="categories">
          <div className="travel">
            <button className="benji"></button>
            <Link to="/travel">
              <img className="travelPic" src={require('./travel.jpg')} />
              <h3 className="catTitle"> Travel </h3>
            </Link>
          </div>
          <div className="beer">
            <button className="benji"></button>
            <Link to="/beer">
              <img className="beerPic" src={require('./beer.jpg')} />
              <h3 className="catTitle2"> Beer </h3>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
