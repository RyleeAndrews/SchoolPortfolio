import React from 'react';
import Header from '../header/header.js';
import './projects.scss';

class Projects extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }

  render(){
    return(
      <div>
        <Header />
        <div className="wrap">
          <a className="aVam" href="http://www.vam.fun" rel="noopener noreferrer"
            target="_blank">
            <h3 className="vam"> VAM </h3>
            <img className="projectpic" src={require('./vam.png')} />
            <p className="vamwords">
              VAM is a visual asset manager for businesses that need the capabilities to share photos quickly
              from office to office without needing to get up to hand the photo in person or sending an entire
              email. VAM allows the user to create their own profile and to upload photos to their page or
              to the whole web, where you can find similar photos with tags. The whole front end of the application
              is done in React.js while the backend platform used is Node.js. This project was designed with three fellow
              class mates at Code Fellows.
            </p>
          </a>
        </div>
        <div className="wrap2">
          <a className="aTJ" href="https://tjandrews.herokuapp.com" rel="noopener noreferrer"
            target="_blank">
            <h3 className="tj"> TJ Andrews Athlete Page </h3>
            <img className="projectpic" src={require('./tjPage.png')} />
            <p className="tjwords">
              Athlete page I made for pro flyboarder TJ Andrews. The page was made to display his travels across
              the world as he competes to be world champion in flyboarding. The page is full of photos of him flying
              as well as videos displaying what he can do. The project is completely done in React.js hosted on heroku.
            </p>
          </a>
        </div>
        <div className="wrap3">
          <a className="aTotal" href="https://totalscreendesign.herokuapp.com" rel="noopener noreferrer"
            target="_blank">
            <h3 className="totalscreen"> Total Screen Design Catalog Page </h3>
            <img className="projectpic" src={require('./totalscreen.png')} />
            <p className="tsdwords">
              Business page for Total Screen Design and Embroidery in Polson, Montana. The user of the page can log in and
              create an account. Once in the user can go to their profile and update their information, place an order and
              see their past orders as well as update their profile info. The page is made with React.js while the backend
              platform is Node.js.
            </p>
          </a>
        </div>
        <div className="wrap4">
          <a className="aTime" href="https://github.com/SpenGietz/time-clock" rel="noopener noreferrer"
            target="_blank">
            <h3 className="timeclock"> Time Clock </h3>
            <p className="timewords">
              Time Clock is an application made for businesses to have a time clock where they can easily
              view employee times over the week and schedule workers for the work week. The application was
              made with JavaScript and was designed with three fellow class mates at Code Fellows.
            </p>
          </a>
        </div>
        <div className="wrap5">
          <a className="aPanda" href="https://devpanda.herokuapp.com/" rel="noopener noreferrer"
            target="_blank">
            <h3 className="panda"> Panda Dev </h3>
            <img className="projectpic" src={require('./pandadev.png')} />
            <p className="pandawords">
              Dev-panda is an app geared towards Software Developers in the Seattle area. It uses the APIs from meetups and google
              maps to create one place where developers can go to find networking opportunities. Meetups can be difficult to
              navigate and give you mixed results when looking for a specific type of meetup. this app narrows it down to tech
              related meetups only. it is currently only available for use in Seattle.
            </p>
          </a>
        </div>
      </div>
    );
  }
}

export default Projects;
