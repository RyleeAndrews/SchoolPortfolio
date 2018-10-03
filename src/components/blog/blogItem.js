// 'use strict';
//
// import React from 'react';
//
// class BlogItem extends React.Component {
//   constructor(props){
//     super(props);
//
//     let initialState = {
//       public: false,
//     }
//
//     this.viewToggle = this.viewToggle.bind(this);
//     this.state = Object.assign(initialState, this.props.blog.private, this.props.blog.public);
//   }
//
//   viewToggle(event){
//     event.preventDefault();
//     this.setState({public: !this.state.public})
//   }
//   render(){
//     console.log(this.state);
//     return(
//       <div>
//         <button type="submit" onClick={this.viewToggle}> public </button>
//       </div>
//     );
//   }
// }
//
// export default BlogItem;
