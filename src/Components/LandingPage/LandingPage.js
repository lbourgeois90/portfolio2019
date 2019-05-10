import React, { Component} from 'react';
import './LandingPage.css'

class LandingPage extends Component {
  
    
  
    render() {
   
      return (
       <section className="landingPageWrapper">

        <div className="nameDiv">
            <h1 className="meetH1">Meet</h1>
            <h1 className="liliH1">Lili</h1>
        </div>

        <div className="picDiv">
            <img src="/images/teacher_outline.png"></img>
        </div>

        <div className="aboutMeDiv">
            <h1 id="helloText">Hello.</h1>
            <p>People call me Lili.</p>
            <p>I am currently studying Full Stack Software Engineering at Prime Digital Academy.</p>
            <p>I used to be a high school teacher.</p>
            <p>Now I type letters and numbers to "write" code.</p>
            <p>I like when things are pretty.</p>
            <p>Learn more about <a href="">Me</a></p> 
        

    
            
        </div>
         
       </section>
      )
    }
}
  


  
  export default LandingPage