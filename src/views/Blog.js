import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

class Blog extends Component {
  constructor(props){
    super(props);
    this.state = {blog: {}};
  };
  componentDidMount(){
    let blog = this.props.location.search;
    axios.get("/api/blog" + blog)
    .then(response=>{
      this.setState({blog: response.data})
    })
    .catch(err=>{
      this.setState({blog: {title: "Could not load", body: "Please try again later"}})
    })
    
  }
render(){
return(
<div>
<Navigation/>

{
  <div className="section">
    <h1 className="title">{this.state.blog.title}</h1>
    <hr/>
    <div className="content is-medium">
      {ReactHtmlParser(this.state.blog.body)}
    </div>
  </div>
}

<Footer/>
</div>
);
}
};

export default Blog;