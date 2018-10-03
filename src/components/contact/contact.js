import React from 'react';
import Header from '../header/header.js';

class Contact extends React.Component {
  constructor(props){
    super(props);

    this.state = {};
  }
  render(){
    return(
      <div>
        <Header />
        Email: ryleeandrews73@gmail.com
      </div>
    );
  }
}

export default Contact;
