import './blog.scss';
import React from 'react';
import {connect} from 'react-redux';
import * as actions from './actions.js';
import BlogForm from './blogForm.js';
import BlogList from './blogList.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
class Dashboard extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.props.blog.map( (pub) => pub.publicView));
    return(
      <React.Fragment>
        <div className="header">
          <Header/>
        </div>
        <BlogForm blog={this.props.blog} create={this.props.createBlog}/>
        <BlogList  blog={this.props.blog}/>
        <Footer/>
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
