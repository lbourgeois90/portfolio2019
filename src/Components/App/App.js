import React from 'react';
import LandingPage from '../LandingPage/LandingPage.js';
import { HashRouter as Router, Route, Redirect} from 'react-router-dom';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Nav from '../Nav/Nav';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav/>


          <Route exact path='/' component={LandingPage}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
         
      </div>
    </Router>
  );
}

export default App;
