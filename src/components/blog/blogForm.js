

import React from 'react';



class BlogForm extends React.Component {
  constructor(props){
    super(props);

    let initialState = {
      authorName: '',
      title: '',
      content: '',
      publicView: false,
      date: Date(),
    };

    this.onChangeOfAuthorName = this.onChangeOfAuthorName.bind(this);
    this.onChangeOfTitle = this.onChangeOfTitle.bind(this);
    this.onChangeOfContent = this.onChangeOfContent.bind(this);
    this.publicView = this.publicView.bind(this);
    this.privateView = this.privateView.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state = Object.assign(initialState, this.props.blog);
  }

  onChangeOfAuthorName(event){
    event.preventDefault();
    this.setState({authorName: event.target.value});
  }

  onChangeOfTitle(event){
    event.preventDefault();
    this.setState({title: event.target.value});
  }

  onChangeOfContent(event){
    event.preventDefault();
    this.setState({content: event.target.value});
  }

  publicView(event){
    event.preventDefault();
    this.setState({publicView: true, isChecked: !this.state.isChecked});
  }

  privateView(event){
    event.preventDefault();
    this.setState({publicView: false});
  }

  onSubmit(event){
    event.preventDefault();
    this.props.create(Object.assign({}, this.state));
  }

  render(){
    console.log(this.props.blog.map( (pub) => pub.publicView), this.props.blog);
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <h2> Author Name:
          <input className="author" value={this.state.author} onChange={this.onChangeOfAuthorName}/>
          </h2>
          <h2> Title:
          <input className="title" value={this.state.title} onChange={this.onChangeOfTitle}/>
          </h2>
          <h2>
          Content:
            <br/>
            <textarea value={this.state.content} onChange={this.onChangeOfContent}/>
          </h2>
          <input type="checkbox"/>

          <button type="submit" onClick={this.publicView}> make public </button>

          <input type="checkbox"/>

          <button type="submit" onClick={this.privateView}> make private </button>
          <br/>
          <button type="submit"> submit </button>
        </form>
      </div>
    );
  }
}

export default BlogForm;
