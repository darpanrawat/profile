import React, {Component} from 'react';

import '../assets/stylesheets/Navigation.css';
import logo from '../assets/img/me2.jpeg';

class Navigation extends Component {
render(){
return(
<div className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
      <a href="/" className="navbar-item">
        <img src={logo} style={{borderRadius: '50%', lineHeight:'inherit'}}/>
      </a>
    <a href="/" className="navbar-item">Home</a>
    <a href="/contact" className="navbar-item">Contact</a>

    
  </div>
</div>
);
}
};

export default Navigation;