
import React from 'react';
import {connect} from 'react-redux';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import './home.scss';


class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.clearIntervalSet = this.clearIntervalSet.bind(this);
    this.setStateBack = this.setStateBack.bind(this);
    this.state = {
      slideCount: 1,
    };
  }

  UNSAFE_componentWillMount(){
    if(this.state.slideCount < 4){
      this.timer = setInterval(this.nextSlide, 4000);
    }
  }

  clearIntervalSet(){
    clearInterval(this.timer);
  }

  setStateBack(){
    this.setState({slideCount: this.state.slideCount === 1});
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }

  render(){
    console.log(this.state.slideCount);

    return(
      <React.Fragment>
        <div>
          <Header/>
          <div className="hi">
            full stack JavaScript developer from Northwest Montana
          </div>
          <br/>
          <div className="small"> the beauty I see outside I transform onto the screen </div>
          <div className="columnwrap">
            <div className="column">
              { this.state.slideCount === 1 ?
                <img className="pichome" src={require('./buf.jpg')} />
                :
                null
              }
              { this.state.slideCount === 2 ?
                <img className="pichome" src={require('./cabin.jpg')} />
                :
                null
              }
              { this.state.slideCount === 3 ?
                <img className="pichome" src={require('./palouse.jpg')} />
                :
                null
              }
              { this.state.slideCount === 4 ?
                this.setStateBack()
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
              { this.state.slideCount === 4 ?
                this.setStateBack()
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
              { this.state.slideCount === 4 ?
                this.setStateBack()
                :
                null

              }
            </div>
          </div>
          <div className="toolsused"> the tools I use to create </div>
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
            <a className="jC" href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="noopener noreferrer"
              target="_blank">
              <div className="js">
                <h4 className="jT"> JavaScript </h4>
                <i className="fab fa-js-square"></i>
              </div>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Dashboard;
