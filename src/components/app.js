
import React from 'react';
import {Route} from 'react-router-dom';
import ReactProjects from './header/reactProjects.js';
import Home from './home/home.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Projects from './projects/projects.js';
import Category from './category/category.js';
import Travel from './category/travel.js';
import Beer from './category/beer.js';
import Ocean from './category/ocean.js';
import Trees from './category/trees.js';
import California from './category/california.js';

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
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/category' component={Category} />
          <Route exact path='/beer' component={Beer} />
          <Route exact path='/travel' component={Travel} />
          <Route exact path='/ocean' component={Ocean} />
          <Route exact path='/trees' component={Trees} />
          <Route exact path='/california' component={California} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
