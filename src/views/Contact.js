import React, {Component} from 'react';
import axios from 'axios';
import $ from 'jquery';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import '../assets/stylesheets/Contact.css';

class Contact extends Component {

  handleSubmit (event) {
    event.preventDefault();

    let form = event.target;
    let elements = form.elements;

    let params = {
      
    }

    for (let i in elements) {

      if (elements[i].type !== 'submit' && typeof(elements[i]) === 'object') {
        let elementField = elements[i].id;
        let elementVal = elements[i].value;

        params[elementField] = elementVal;
      }

    };

    $(document).scrollTop(0)
    $("#header").text("Sending...").addClass("has-text-primary");

    axios.post('/api/email', params)
    .then (response => {
      $("#header").text("Sent Email successfully. Speak to you soon.").addClass("has-text-primary");
      setTimeout(()=> {
        window.location = '/'
      }, 2890)
    })
    .catch (err => {
      $("#header").text("Could not send email. Please try again later").addClass("has-text-danger");
    })
    
  }

  constructor(props){
    super(props);
    this.state = {};

    this.handleSubmit = this.handleSubmit.bind(this);
  };
render(){
return(
<div className="contact">
<Navigation/>

  <h1 className="title is-large" id="header">Contact Me</h1>
  <div id="dash"/>
  <div className="section columns">

    <div className="column">
      <div className="content">

      <h1 className="title is-marginless">Tell me about your idea. What can I help with?</h1>
        <br/>
      <h2 className="subtitle">Want to build a landing page?</h2>

      <h2 className="subtitle">Develop an API?</h2>

      <h2 className="subtitle">Make a game?</h2>

      </div>  
    </div>

    <form id="contactform" className="column is-three-fifths" onSubmit={this.handleSubmit}>
      <label className="label">First Name</label>
      <input id="firstName" name="firstName" type="text" required/>

      <label className="label">Last Name</label>
      <input id="lastName" name="lastName" type="text" />

      <label className="label">Email</label>
      <input id="email" name="email" type="email" required/>

      <label className="label">Tell me about your project</label>
      <textarea id="about" name="main" type="text" rows="10" required/>

      <label className="label">Tell me how I can help</label>
      <textarea id="help" name="sub" type="text" rows="5" required/>

      <label className="label">Additional information</label>
      <input id="additional" name="additional" type="text"/>

      <input className="button is-radiusless is-large" type='submit' value='Send'/>
    </form>
  </div>
<Footer/>
</div>
);
}
};

export default Contact;
