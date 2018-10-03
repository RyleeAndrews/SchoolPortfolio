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
        Website made by Rylee Andrews copyright@2018
      </div>
    );
  }
}

export default Footer;
