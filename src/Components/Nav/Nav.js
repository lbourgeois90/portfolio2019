import React, { Component} from 'react';
import './Nav.css'

class Nav extends Component {

  
    
  
    render() {
   
      return (
       <section>
          <nav>
                <ul class="nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#/portfolio">Portfolio</a></li>
                    <li><a href="/#/resume">Resume</a></li>
                </ul>
            </nav>
       </section>
      )
    }
}
  


  
  export default Nav