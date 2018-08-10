import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import '../assets/stylesheets/Blogs.css';

class Blogs extends Component {
  constructor(props){
    super(props);
    this.state = {blogs: []};
  };
  
  componentWillMount(){

    fetch('/api/blogs')
      .then(response => response.json())
      .then(blogs => this.setState({ blogs }))
      .catch(err => console.log(err))
  };

  
render(){
return(
<div>
  <Navigation/>
  <div className="section">
    <h1 className="title">Blog</h1>
    <hr/>
    <ul className="blogs-list">
    {

    this.state.blogs.length > -1 ? //if blogs exist
    
    this.state.blogs.map((blog, index) => //map them
          <li key={index} className="content">
            <a href={"blog?id=" + blog._id} className="title">{blog.title}</a>
            <span className="subtitle">{ReactHtmlParser(blog.body.length >= 250 ? blog.body.slice(0, 250) + '...' : blog.body)}</span>
          </li>
        )

    : //else
    
    "It's Empty here..."

    }
    </ul>
  </div>
  <Footer/>
</div>
);
}
};

export default Blogs;