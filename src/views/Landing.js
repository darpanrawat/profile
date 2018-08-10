import React, {Component} from 'react';

import ScrollMagic from 'scrollmagic';
import $ from 'jquery';

import Header from '../components/Header';
import SlideIntro from '../components/SlideIntro';
import Footer from '../components/Footer';

import '../assets/stylesheets/Landing.css';


class Landing extends Component {
    componentDidMount(){
        let controller = new ScrollMagic.Controller();
        let slides = document.getElementsByClassName("slide");

        for(let i = 0; i<slides.length; i++){
            let slide = new ScrollMagic.Scene({
                triggerHook:.7,
                triggerElement: slides[i]
            });

            slide.setClassToggle(slides[i], "fade-in")
            .addTo(controller);
        };
    
        let header = new ScrollMagic.Scene({
            triggerElement: "#header-main",
            triggerHook: 0
        });
        header.setPin("#header-main")
        .setClassToggle("#header-main", "active")
        .addTo(controller);

        let projects = $(".projects-grid .project")
        projects.each(function(){
            $(this).hover(
            function(){
                $(this).toggleClass("active")
            })
        })
    }
render(){
return(
<div id="Landing">
    <Header/>
    <SlideIntro/>

    <div id="infoSlide" className="slide">
        <h1>About</h1>
        <hr/>
        <p>My name is Jonathan Díaz - I'm a Self taught developer that's passionate about technology. I work on maintainable code on the back end, and a beautiful experience on the front end.</p>
        <br/>
        <p>I was born to a phone technician and a secretary, and since the beginning have been interested in having the right answers, and the best way to do things.
            I initially became interested in coding when I took a robotics course at 14, and eventually got into it thanks to a friend at the age of 15. Ever since then, I've dedicated 
            to it on a daily basis, recently beginning to look into making it a career.
        </p>
    </div>

    <div id="skillSlide" className="slide has-text-centered">
    <div className="columns is-gapless">
        <div className="column is-block-mobile has-text-centered">
            <h2>The Front End</h2>
                <br/>
            <p>I work on user interfaces and experience, and am comforable working alone or with others; The front end is my main area of knowledge.</p>
            <h3>Tools / Libraries</h3>
            <p>HTML/CSS, JS, jQuery, React.js, Bootstrap</p>
        </div>
        <div className="column is-block-mobile">
            <h2>The Back End</h2>
                <br/>
            <p>I possess knowledge on server side technologies among my front end skills, creating APIs with reliability and technical feasibility.</p>
            <h3>Languages / Frameworks</h3>
            <p>Node.js, Express.js, MongoDB, Ruby</p>
        </div>
        <div className="column is-block-mobile" style={{ borderBottomWidth: 0 }}>
            <h2>Beyond</h2>
            <br/>
            <p>Beyond the web, I have experience in deployment, mobile development and version-control</p>
            <h3>Skills</h3>
            <p>I use technologies like Heroku, Netlify, React native, Git, Bitbucket and more to create products available to all.</p>
        </div>
    </div>
    </div>

    <div  id="projectsSlide" className="slide has-text-centered section">
        <h1>My Recent Work</h1>
        <br/>
        <div className="projects-grid container">
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('18thmain.png')",
                }}>

                </div>
                <div className="content">
                    <h2>18th&Main member app</h2>
                    <p>Worked as a React-native developer for a country club community app.</p>
                </div>
            </div>
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('financialsuccess.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Road To Financial Success</h2>
                    <p>Website for a financial consulting company.</p>

                    <a className="button is-rounded" href="https://roadtofinancialsuccess.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('johndiaz.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Darpan Rawat</h2>
                    <p>My personal website outside of work.</p>

                    <a className="button is-rounded" href="https://johndiaz.netlify.com/" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
                <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('itss.png')",
                }}>

                </div>
                <div className="content">
                    <h2>IT Solutions Studios</h2>
                    <p>A page for an IT solutions copmany, deployed using heroku.</p>

                    <a className="button is-rounded" href="https://itsolutionsstudios.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
                <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('eq.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Epiquest</h2>
                    <p>Open source adventure game made with Coffeescript</p>

                    <a className="button is-rounded" href="https://epiquest.netlify.com" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('calvos.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Calvos Inc</h2>
                    <p>An imaginary car company with innovation in mind.</p>


                    
                </div>
            </div>
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('space.png')",
                }}>

                </div>
                <div className="content">
                    <h2>THREE.Space</h2>
                    <p>A 3D universe simulator made with THREE.JS</p>
                    <a className="button is-rounded" href="https://johncdf.keybase.pub/Space/index.html" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('news.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Renessaince news</h2>
                    <p>A news site for Renessaince news stories.</p>

                    <a className="button is-rounded" href="https://notic-c48d6.firebaseapp.com/home" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
            
        </div>
    </div>

    <div className="slide endSlide has-text-centered">
        <h1>Interested in working together?</h1>
        <p>I'm currently accepting work, and would love to learn about your project</p>

        <div className="button_container">
            <a href="contact" className="button is-rounded is-outlined is-medium">
                Get started
            </a>
        </div>

        <div className="social" id="contact">
            <a className="button is-rounded is-medium fa fa-instagram" title="Instagram" href="https://www.instagram.com/skepdimi/" target="_blank" rel="noopener noreferrer"></a>
            <a className="button is-rounded is-medium fa fa-key" title="KeyBase" href="https://keybase.io/johncdf" target="_blank" rel="noopener noreferrer"></a>
            <a className="button is-rounded is-medium fa fa-envelope-o" title="Email" href="mailto:diaz.johndev@gmail.com" target="_blank" rel="noopener noreferrer"></a>
            <a className="button is-rounded is-medium fa fa-github" title="GitHub" href="https://Github.com/SKEPDIMI" target="_blank" rel="noopener noreferrer"></a>
        </div>
    </div>

    <Footer/>
</div>
);
}
};

export default Landing;
