import React, {Component} from 'react';
import Typewrite from './Typewrite.js';
import $ from 'jquery';

import '../assets/stylesheets/SlideIntro.css';
class SlideIntro extends Component {
    componentDidMount(){
        $(".homeSlide.active").css('opacity','1')
    }
    goTo(t){
        document.getElementById(t).scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
    slideDown(){
        let slideOut = $('.homeSlide.active');

        let slideIn = $('.homeSlide.active').next('.homeSlide');

        if (!slideIn.length){
            return
        }
        slideIn.animate({
            "transform" : "translateY(100%)",
            "opacity" : "1"
        },250).toggleClass("active");
        slideOut.animate({
            "transform":"translateY(-100%)",
            "opacity":"0"
        },250).toggleClass("active");
    }
    slideUp(){
        let slideOut = $('.homeSlide.active'),
        slideIn = $('.homeSlide.active').prev('.homeSlide');

        if(!slideIn.length){
            return
        }

        slideIn.animate({
            "transform" : "translateY(-100%)",
            "opacity" : "1"
        },250).toggleClass("active");
        slideOut.animate({
            "transform":"translateY(100%)",
            "opacity":"0"
        },250).toggleClass("active");
    }
    constructor(props){
      super(props);
      this.state = {};
      this.goTo= this.goTo.bind(this);
      this.slideDown = this.slideDown.bind(this);
      this.slideUp = this.slideUp.bind(this);
    };
render(){
return(

<div className="introSlide">
        
        <div className="top">

            <div className="homeSlide slide01 active">
 
            <h1>Darpan Rawat</h1>
            <p>Full Stack Javascript Developer </p>
 
            </div>
 
            <div className="homeSlide slide02">
                <p>I'm a friendly, hard working coder looking to facilitate solutions for brands around the world.</p>
                <p>Strength in adaptability, and learning capabilities. I am skilled in</p>
 
            </div>
 
            <div className="homeSlide slide03">
 
            <h1>Stay a while</h1>
            <p>Stay forever</p>
            </div>
 
        </div>
        
        <div className="bottom">
 
            <div className="homeSlide slide01 active">

            <p>Self-Taught Developer that works on practical business solutions.</p>
            <p>Passionate about elegant, reliable, and maintainable code</p>

            </div>

            <div className="homeSlide slide02">

              <Typewrite items={["HTML / CSS","JavaScript","BootStrap","Sass/LESS","React.js","VUE.js","Redux","Responsive Design","Firebase","Node.js","Express.js","MongoDB","Mongoose","React NATIVE"]}/>

            </div>

            <div className="homeSlide slide03">

                <button className="button violator is-rounded is-bordered" onClick={()=>this.goTo('infoSlide')}>Learn More</button>

            </div>

        </div>

    
    
    <div id="slideNav">
    <ul>
      <li className="slideNavNext">
        <a href="#" title="Go to next slide" onClick={this.slideUp}>
          <span className="fa fa-angle-up"></span>
        </a>
      </li>
      <li className="slideNavPrev">
        <a href="#" title="Go to previous slide" onClick={this.slideDown}>
          <span className="fa fa-angle-down"></span>
        </a>
      </li>
    </ul>
    </div>
    <div className="divider"></div>
</div>
);
}
};

export default SlideIntro;
