import React from 'react';
import Header from '../header/header.js';

class Features extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div>
        <Header/>
        <a href="https://spark.adobe.com/page/IiWKEnqE2f4aB/" rel="noopener noreferrer"
          target="_blank">
          Find my adobe spark story here.
        </a>
      </div>
    );
  }
}

export default Features;
