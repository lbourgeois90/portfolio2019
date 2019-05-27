import React from 'react';
import LandingPage from '../LandingPage/LandingPage.js';
import { HashRouter as Router, Route} from 'react-router-dom';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Resume from '../Resume/Resume';
import Nav from '../Nav/Nav';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
    <Router>
      <div className="App">
      <Nav/>


          <Route exact path='/' component={LandingPage}/>
          <Route path='/portfolio' component={Portfolio}/>
          <Route path='/resume' component={Resume}/>
         
      </div>
    </Router>
    </MuiThemeProvider>
  );
}

export default App;
