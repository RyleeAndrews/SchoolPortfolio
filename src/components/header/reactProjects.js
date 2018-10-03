import React from 'react';
import Header from './header.js';
import uuid from 'uuid/v1';
import Footer from '../footer/footer.js';
class ReactProjects extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    let projectArray = ['http://www.vam.fun/'];
    return(
      <div>
        <Header />
        <ul>
          {
            projectArray.map( (project,i) =>
              <li key={uuid()}>
                <a href={project}> Visual Asset Manager </a>
                <p> A visual asset manager that allows you to sign in
            or sign up upon landing on the page. Once signed in,
            the user is taken to the main page where not only their photos but also
            photos uploaded by other users will appear. The user can select tags,
            which is generated when a user uploads a photo to the the site, which will narrow
            down the displayed pictures.
                </p>
              </li>
            )
          }
        </ul>
        <Footer/>
      </div>
    );
  }
}

export default ReactProjects;
