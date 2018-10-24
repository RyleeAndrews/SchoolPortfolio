
import React from 'react';
import {Route} from 'react-router-dom';
import ReactProjects from './header/reactProjects.js';
import Home from './home/home.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Features from './features/features.js';
import Projects from './projects/projects.js';

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
          <Route exact path='/features' component={Features} />
          <Route exact path='/projects' component={Projects} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
