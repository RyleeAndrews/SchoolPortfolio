
import React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import './home.scss';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.timerSlide = this.timerSlide.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.restart = this.restart.bind(this);
    this.endRestart = this.endRestart.bind(this);

    this.state = {
      slideCount: 1,
    };
  }

  endRestart(){
    clearInterval(this.timer2);
  }

  previousSlide(){
    this.setState({slideCount: this.state.slideCount - 2});
  }

  timerSlide(){
    this.timer = setInterval(this.nextSlide, 4000);
  }

  restart(){
    this.timer2 = setInterval(this.previousSlide,4000);
  }

  stopTimer(){
    clearInterval(this.timer);
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  render(){
    console.log(this.state.slideCount);

    return(
      <React.Fragment>
        <div>
          <Header/>
          <div className="hi">
            Full-Stack JavaScript developer from Northwest Montana
          </div>
          <br/>
          <div className="small"> the beauty I see outside I transform onto the screen </div>
          <div className="columnwrap">
            <div className="column">
              { this.state.slideCount === 1 ?
                <div>
                  {this.endRestart()}
                  {this.timerSlide()}
                  <img className="pichome" src={require('./buf.jpg')} />
                </div>
                :
                null
              }
              { this.state.slideCount === 2 ?
                <img className="pichome" src={require('./cabin.jpg')} />
                :
                null
              }
              { this.state.slideCount === 3 ?
                <div>
                  {this.stopTimer()}
                  <img className="pichome" src={require('./palouse.jpg')} />
                  {this.restart()}
                </div>
                :
                null
              }
            </div>
            <div className="column">
              { this.state.slideCount === 1 ?
                <img className="pichome" src={require('./valley.jpg')} />
                :
                null
              }
              { this.state.slideCount === 2 ?
                <img className="pichome" src={require('./missions.jpg')} />
                :
                null
              }
              { this.state.slideCount === 3 ?
                <img className="pichome" src={require('./kiwanada.jpg')} />
                :
                null
              }
            </div>
            <div className="column">
              { this.state.slideCount === 1 ?
                <img className="pichome" src={require('./mountains.jpg')} />
                :
                null
              }
              { this.state.slideCount === 2 ?
                <img className="pichome" src={require('./biggy.jpg')} />
                :
                null
              }
              { this.state.slideCount === 3 ?
                <img className="pichome" src={require('./cascade.jpg')} />
                :
                null
              }
            </div>
          </div>
          <h3 className="toolsused"> the tools used to create </h3>
          <div className="toolswrap">
            <a className="aH" href="https://en.wikipedia.org/wiki/HTML" rel="noopener noreferrer" target="_blank">
              <div className="html">
                <h4 className="hT"> HTML </h4>
                <i className="fab fa-html5"></i>
              </div>
            </a>
            <a className="aC" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="noopener noreferrer"
              target="_blank">
              <div className="css">
                <h4 className="cT"> CSS </h4>
                <i className="fab fa-css3"></i>
              </div>
            </a>
            <a className="jC" href="https://en.wikipedia.org/wiki/JavaScript" rel="noopener noreferrer"
              target="_blank">
              <div className="js">
                <h4 className="jT"> JavaScript </h4>
                <i className="fab fa-js-square"></i>
              </div>
            </a>
          </div>
          <h3 className="framewords"> the framework used to add user functionality </h3>
          <div className="framework">
            <a className="aR" href="https://reactjs.org/tutorial/tutorial.html" rel="noopener noreferrer"
              target="_blank">
              <i className="fab fa-react"></i>
              <div className="reactwords"> <q className="qR"> React is a declarative, efficient,
              and flexible JavaScript library for building user interfaces.
              It lets you compose complex UIs from small and
              isolated pieces of code called “components”. </q>
              </div>
            </a>
          </div>
          <h3 className="platform"> the platform used to handle web services </h3>
          <div className="node">
            <a className="aN" href="https://en.wikipedia.org/wiki/Node.js" rel="noopener noreferrer"
              target="_blank">
              <i className="fab fa-node"></i>
              <div className="nodewords"> <q className="qN"> Node.js lets developers use JavaScript to write Command Line tools and
              for server-side scripting—running scripts server-side
              to produce dynamic web page content before the page is sent to the user&#39;s web browser. </q>
              </div>
            </a>
          </div>
          <h3 className="ref"> what others have to say about me </h3>
          <div className="containerR">
            <a className="aTagR" href="https://www.linkedin.com/in/ryleeandrews/" rel="noopener noreferrer"
              target="_blank">
              <i className="fas fa-code"></i>
              <div className="cFQ">
                <q className="quoterefs"> Rylee brings an amazing work ethic and a strong grasp of concepts and application.
                  Rylee is able to take very minimal direction and dive deep, crafting solutions through not just research and trial/error,
                  but though real evaluation of the concept and the end goal. This will translate really well into working in larger and
                  more complicated codebases where legacy standards may still be the norm.
                  I highly recommend Rylee as an asset to any development team. </q>
                <br/>
                <div className="john"> - John Cokos, Lead Instructor at Code Fellows </div>
              </div>
            </a>
          </div>
          <div className="containR2">
            <a className="aTagR2" href="https://s3.amazonaws.com/referencebucky/Rylee+Reference+Letter.pdf"
              rel="noopener noreferrer" target="_blank">
              <i className="fas fa-paint-roller"></i>
              <div className="cFQ2">
                <q className="quoterefs2">
                  Rylee Andrews has only worked for me a short time, but has already displayed his great resilience and
                  tenacity. There have been uncontrollable, unfortunate situations that have been brought upon Rylee during
                  his time working for me. Many individuals would crack under this amount of pressure,
                  but Rylee has stayed positive and continues to power forward in life and his work.
                </q>
                <br/>
                <div className="david"> -David Garvida, Former District Manager College Works Painting </div>
              </div>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Dashboard;
