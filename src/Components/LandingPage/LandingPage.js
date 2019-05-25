import React, { Component} from 'react';
import './LandingPage.css';
import LaptopMac from '@material-ui/icons/LaptopMac';
import Face from '@material-ui/icons/Face';
import School from '@material-ui/icons/School';
import Favorite from '@material-ui/icons/Favorite';
import LocalFlorist from '@material-ui/icons/LocalFlorist';
import MoreHoriz from '@material-ui/icons/MoreHoriz';

class LandingPage extends Component {
  
    
  
    render() {
   
      return (
       <section className="landingPageWrapper">

        <div className="nameDiv">
            <h1 className="meetH1">Meet
            <br/> Lili
            </h1>
        </div>

        <div className="picDiv">
            {/* <p><img src="/images/teacher_outline.png"></img></p> */}
        </div>

        <div className="aboutMeDiv">
            <h1 id="animatedHello">
                <span>H</span>
                <span>E</span>
                <span>L</span>
                <span>L</span>
                <span>O</span>
            </h1>
            <p><Face className='icon'/> You can call me Lili.</p>
            <p><School className='icon'/> I am currently studying Full Stack Software Engineering at Prime Digital Academy.</p>
            <p><Favorite className='icon'/> I used to be a high school teacher.</p>
            <p><LaptopMac className='icon'/> Now I type letters and numbers to "write" code.</p>
            <p><LocalFlorist className='icon'/> I like when things are pretty.</p>
            <p><MoreHoriz className='icon'/> Learn more about <a href="/#/resume">Me</a></p> 
 
        </div>

        <div className="contactDiv">
        <h1 id="animatedContact">
                <span>C</span>
                <span>O</span>
                <span>N</span>
                <span>T</span>
                <span>A</span>
                <span>C</span>
                <span>T</span>
            </h1>
            <a href="https://github.com/lbourgeois90" target="_blank"><img src="/images/githubicon.png"></img></a>
            <a href="mailto:lbourgeois@gmail.com"><img src="/images/gmailIcon.png"></img></a>
            <a href="https://www.linkedin.com/in/lili-bourgeois-49947563/" target="_blank"><img src="/images/linkedinicon.png"></img></a>
        </div>
         
       </section>
      )
    }
}
  


  
  export default LandingPage