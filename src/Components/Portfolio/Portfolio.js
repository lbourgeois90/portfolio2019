import React, { Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Link from '@material-ui/core/Link';
import './Portfolio.css'


const tutorialSteps = [
  {
    label: 'GAP(Good Agricultural Practices) Farmers',
    githubLink: 'https://github.com/lbourgeois90/umn-gap',
    deploymentLink: 'https://glacial-ravine-98721.herokuapp.com/#/home',
    imgPath:
      '/portfolio2019/images/UMNGAP.mov',
    technologies: 
    <ul className="techList">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Material-UI</li>
      <li>CSS</li>
      <li>Axios</li>
      <li>Express</li>
      <li>Moment.js</li>
      <li>Passport</li>
      <li>PostgreSQL</li>
      <li>React-stepper</li>
      <li>React-redux</li>
      <li>Redux-saga</li>
      <li>Redux-logger</li>
      <li>Sweetalert</li>
      <li>PDFmake</li>
    </ul>
  },
  {
    label: 'ActivatEd: Educational Content Distribution Application',
    githubLink: 'https://github.com/lbourgeois90/activated',
    deploymentLink: 'https://fast-stream-15490.herokuapp.com/#/home',
    imgPath:
      '/portfolio2019/images/createAnActivatorDemo.mov',
    technologies: 
    <ul className="techList">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Material-UI</li>
      <li>CSS</li>
      <li>Axios</li>
      <li>Express</li>
      <li>Moment.js</li>
      <li>Passport</li>
      <li>PostgreSQL</li>
      <li>React-stepper</li>
      <li>React-redux</li>
      <li>Redux-saga</li>
      <li>Redux-logger</li>
      <li>Sweetalert</li>
    </ul>
  },
  {
    label: 'Server Side Calculator',
    githubLink: 'https://github.com/lbourgeois90/serversidecalculator',
    deploymentLink: 'https://radiant-basin-74968.herokuapp.com/',
    imgPath:
      '/portfolio2019/images/serviceSideCalculatorDemo.mov',
    technologies: 
    <ul className="techList">
      <li>JavaScript</li>
      <li>jQuery</li>
      <li>Ajax</li>
      <li>Node.js</li>
      <li>CSS</li>
      <li>Express</li>
  </ul>
  },
  {
    label: 'Feedback Form',
    githubLink: 'https://github.com/lbourgeois90/redux-feedback',
    deploymentLink: '',
    imgPath:
      '/portfolio2019/images/feedback.mp4',
      technologies: 
      <ul className="techList">
        <li>JavaScript</li>
        <li>React</li>
        <li>Axios</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>CSS</li>
        <li>Bootstrap</li>
        <li>React-redux</li>
        <li>Redux-logger</li>
        <li>React-router</li>
        <li>React-stepper</li>
        <li>Sweetalert</li>

    </ul>
  },
  {
    label: 'Creature of Harry Potter Gallery',
    githubLink: 'https://github.com/lbourgeois90/react-gallery-items',
    deploymentLink: '',
    imgPath:
      '/portfolio2019/images/gallery.mp4',
      technologies: 
      <ul className="techList">
        <li>JavaScript</li>
        <li>React</li>
        <li>Axios</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>CSS</li>
        <li>Bootstrap</li>

    </ul>
  },
  // {
  //   label: 'Goč, Serbia',
  //   imgPath:
  //     'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  // },
];

const styles = theme => ({
  root: {
    maxWidth: '80%',
    flexGrow: 1,
    margin: '0 auto',
    height: '100%',
    textAlign: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'white',
    textAlign: 'center',
    margin: '0 auto',
    marginTop: 50
  },
  img: {
    height: 400,
    display: 'block',
    maxWidth: '100%',
    overflow: 'hidden',
    width: '80%',
    margin: '0 auto',
  },
  mobileStepper:{
    backgroundColor: 'white',
    color:'#192231',
    width: '80%',
    margin: '0 auto',
  },
  buttons:{
    color: '#192231',
  },
  link:{
    color: '#7690B8',
    fontSize: 28,
    textDecoration: 'none',
    fontFamily: 'Oswald',
  },
  technologies:{
    color: '192231',
  },

  
});



class Portfolio extends Component {

  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = tutorialSteps.length;
    let deployLink = null
    if(tutorialSteps[activeStep].deploymentLink !== ''){
      deployLink = <a href={tutorialSteps[activeStep].deploymentLink} target="_blank" className={classes.link}>See Deployed App</a>
    }

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <Typography style={{color: '#DCAE1D', fontSize: 36, fontFamily: 'Oswald'}}>{tutorialSteps[activeStep].label}</Typography>
        </Paper>
        {/* <video autoplay="" loop="" muted="" data-reactid=".0.1.0.0" height="400px">
          <source type="video/mp4" data-reactid=".0.1.0.0.0" className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}/>
        </video> */}
        <Typography style={{color: '#192231', fontSize: 28, fontFamily: 'Oswald'}}>Technologies Used:</Typography>
        <p className={classes.technologies}>{tutorialSteps[activeStep].technologies}</p>
        <a href={tutorialSteps[activeStep].githubLink} target="_blank" className={classes.link}>See Github Repo</a>
        <br/>
        {deployLink}
        <br/>
        <br/>
        <video className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
          type="video/mp4"
          autoplay="" 
          loop="" 
          muted="">>
           </video>
        
        {/* <img
          className={classes.img}
          src={tutorialSteps[activeStep].imgPath}
          alt={tutorialSteps[activeStep].label}
        /> */}
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          variant="dots"
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1} className={classes.buttons}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0} className={classes.buttons}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
      </div>
    );
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Portfolio);