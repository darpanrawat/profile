import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import Landing from './views/Landing';
import Blogs from './views/Blogs';
import Blog from './views/Blog';
import Contact from './views/Contact';

class App extends Component {
  render() {
    return (
        <div className="app">
          <Route exact path='/' component={Landing}/>
          <Route path='/blogs' component={Blogs}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/contact' component={Contact}/>
        </div>
    );
  }
}

export default App;
