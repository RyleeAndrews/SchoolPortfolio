

import React from 'react';
import {photoToDataUrl} from '../../lib/helperLib.js';

class BlogList extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    console.log(this.state);
    return(
      <div>
        <ul>
          {
            this.props.blog.map( (blog,i) => {
              if(blog.publicView === true){
                return <li key={blog._id}>
                  <h2 className="titleWords"> {blog.title} </h2>
                  <h2 className="date"> posted on: {blog.date.toLocaleString().slice(0,15)} by: {blog.authorName}</h2>
                  <h2 className="content"> {blog.content} </h2>
                </li>;
              }else{
                return null;
              }
            }
            )
          }
        </ul>
      </div>
    );
  }
}

export default BlogList;
