
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../blog/actions.js';
import BlogForm from '../blog/blogForm.js';
import BlogList from '../blog/blogList.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import './home.scss';


class Dashboard extends React.Component {
  constructor(props){
    super(props);


  }

  render(){


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
              <img className="pichome" src={require('./buf.jpg')} />
            </div>
            <div className="column">
              <img className="pichome" src={require('./valley.jpg')} />
            </div>
            <div className="column">
              <img className="pichome" src={require('./mountains.jpg')} />
            </div>
          </div>
          <div className="toolswrap">
            <div className="tools">
              <h3 className="html"> HTML </h3>
              <ul>

              </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  blog: state,
});

const mapDispatchToProps = ( dispatch, getState) => ({
  createBlog: blog => dispatch(actions.blogCreate(blog)),
  updateBlog: blog => dispatch(actions.blogUpdate(blog)),
  deleteBlog: blog => dispatch(actions.blogDelete(blog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
