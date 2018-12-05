import React from 'react';
import Header from '../header/header.js';
import { Link } from 'react-router-dom';
import './category.scss';


class California extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div>
        <Header />
        <div className="blogContainer">
          <h3 className="blogTitle"> California Redwoods </h3>
          <p className="datesBlog"> posted on: December 5th, 2018 </p>
          <p className="blogss"> Took a trip to the redwoods in the summer of 2018. Was an amazing experience. Seeing those
            tree&#39;s size in real life was awe inspiring. </p>
          <img className="blogPhoto" src={require('./redwoodtree.jpg')} />
          <p className="blogss"> Some of the trees that I camped underneath were the size of
              skyscrapers. Took morning baths in cold creek water and camped between the creek and a stream. Own little island.
          </p>
          <img className="blogPhoto" src={require('./island.jpg')} />
          <p className="blogss"> Was no one within us for miles. Spent four days in absolute isolation. An experience I will remember
          forever. </p>
          <br />
          <h3 className="blogTitle"> California Beer </h3>
          <p className="datesBlog"> posted on: December 5th, 2018 </p>
          <p className="blogss"> One of the things I like to enjoy is beer. Another the ocean. So when I go to relax for a couple
          hours on a rocky beach in a dramatic scenery, you know I was happy.</p>
          <img className="blogPhoto2" src={require('./beer.jpg')} />
          <p className="blogss"> Had a couple brews from Mad River Brewery in Northern California. Their Jamacian red ale was
          perfect for the weather. Nice and light because the sun was out.
          </p>
          <img className="blogPhoto2" src={require('./oceann.jpg')} />
          <h5 className="tags"> Tags </h5>
          <button className="hashbtn">
            <Link to="/beer">
              <p className="hashtags"> #beer </p>
            </Link>
          </button>
          <button className="hashbtn">
            <Link to="/travel">
              <p className="hashtags"> #travel </p>
            </Link>
          </button>
          <button className="hashbtn">
            <Link to="/california">
              <p className="hashtags"> #california </p>
            </Link>
          </button>
          <button className="hashbtn">
            <Link to="/trees">
              <p className="hashtags"> #trees </p>
            </Link>
          </button>
          <button className="hashbtn">
            <Link to="/ocean">
              <p className="hashtags"> #ocean </p>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default California;
