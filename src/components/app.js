
import React from 'react';
import {Route} from 'react-router-dom';
import ReactProjects from './header/reactProjects.js';
import Home from './home/home.js';
import About from './about/about.js';
import Contact from './contact/contact.js';

import Blog from './blog/dashboard.js';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>


        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/blog/new-post' component={Blog} />
          <Route exact path='/reactprojects' component={ReactProjects} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
