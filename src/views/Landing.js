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
        <p>My name is Darpan Rawat - I'm a Self taught developer  based in Delhi - India.I work on E-commerce, Data Analytics and Logistic Domains.</p>
        <br/>
        <p>I have specialized in HTML5, CSS3, JavaScript, Angular, jQuery, React,Redux Web Application Development. I love to write Algo for Complex Data Structure. I am developing websites optimized, clean code with SEO support as well as i develop Apis  using Node (Express js).
        </p>
    </div>

    <div id="skillSlide" className="slide has-text-centered">
    <div className="columns is-gapless">
        <div className="column is-block-mobile has-text-centered">
            <h2>The Front End</h2>
                <br/>
            <p>I work on user interfaces and experience, and am comforable working alone or with others; The front end is my main area of knowledge.</p>
            <h3>Tools / Libraries</h3>
            <p>HTML/CSS, Javascript, jQuery, React.js, Angular, Redux, Grunt, webpack, Bootstrap</p>
        </div>
        <div className="column is-block-mobile">
            <h2>The Back End</h2>
                <br/>
            <p>I possess knowledge on server side technologies among my front end skills, creating APIs with reliability and technical feasibility.</p>
            <h3>Languages / Frameworks</h3>
            <p>Node.js, Express.js, MongoDB, Postgress</p>
        </div>
        <div className="column is-block-mobile" style={{ borderBottomWidth: 0 }}>
            <h2>Beyond</h2>
            <br/>
            <p>Beyond the web, I have experience in deployment, and version-control</p>
            <h3>Skills</h3>
            <p>I use technologies like Aws, EC2, S3, Git, Bitbucket and more to create products available to all.</p>
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
                    <h2>GoodEarth Design Studio(Eicher)</h2>
                    <p>Worked as Senior Javascript developer for a E-commerce app.</p>
                    <a className="button is-rounded" href="https://www.goodearth.in/" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('nicobar.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Nicobar</h2>
                    <p>Worked as Senior Javascript developer for a E-commerce Website.</p>
                    <p>Nicobar is so much more than just fabric and thread. At Nicobar culture and commerce intersec</p>
                    <a className="button is-rounded" href="https://www.nicobar.com/" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
            <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('opensource.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Darpan Rawat</h2>
                    <p>My personal Opensource, outside of work.</p>

                    <a className="button is-rounded" href="http://www.pykih.com/products/pykQuery" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
                <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('data.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Datawrapper (Create charts with story)</h2>
                    <p>Datawrapper makes it easy to create beautiful charts.</p>

                    <a className="button is-rounded" href="https://www.datawrapper.de/" target="_blank" rel="noopener noreferrer">
                        View Site
                    </a>
                </div>
            </div>
                <div className="project">
                <div className="hero" style={{
                    backgroundImage: "url('health.png')",
                }}>

                </div>
                <div className="content">
                    <h2>Health Assistance</h2>
                    <p>Health Advisor is an online health platform brought  by ICICI Lombard GIC Ltd.</p>

                    <a className="button is-rounded" href="https://healthadvisor.icicilombard.com/" target="_blank" rel="noopener noreferrer">
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
