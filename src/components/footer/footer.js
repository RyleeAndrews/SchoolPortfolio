import React from 'react';
import './footer.scss';

class Footer extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div className="foot">
        <div className="footwords"> Website made by Rylee Andrews copyright@2018 </div>
        <a className="github" href="https://github.com/RyleeAndrews" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-github"></i>
        </a>
        <a className="linkedin" href="https://www.linkedin.com/in/ryleeandrews/" rel="noopener noreferrer" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    );
  }
}

export default Footer;
