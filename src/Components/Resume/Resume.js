import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BuildIcon from '@material-ui/icons/BuildOutlined';
import SchoolIcon from '@material-ui/icons/SchoolOutlined';
import WorkIcon from '@material-ui/icons/WorkOutline'
import CheckIcon from '@material-ui/icons/CheckCircleOutline';

const styles = theme => ({
  root: {
    width: '80%',
    margin: '0 auto',
    marginTop: 50,
  },
  expansion:{
      backgroundColor: 'black',
  },
  heading: {
    flexBasis: '33.33%',
    flexShrink: 0,
    color: '#C4073F',
    fontFamily: 'Oswald',
    fontSize: 20,
  },
  secondaryHeading: {
    color: 'rgb(255,255,255, 0.5)',
    flexBasis: '33.33%',
    fontFamily: 'Oswald',
    fontSize: 20
  },
  header:{
      color: '#FD4531',
      fontSize: 24,
  },
  nameHeader:{
    color: '#736396',
    fontSize: 30,
  },
  expandMore:{
      color: '#C4073F'
  },
  typographySummary:{
      color: 'rgb(255,255,255, 0.5)',
      fontSize: 18,
      fontFamily: 'Source Serif Pro',
  },
  typographyDate:{
    color: 'rgb(255,255,255, 0.6)',
    fontFamily: 'Oswald',
    fontSize: 20,
  },
  skillsList:{
    color: 'rgb(255,255,255, 0.6)',
    display: 'table',
    width: '100%',
  },
  skillsListItems:{
      display: 'table-cell',
      width: '20%',

  },

  certList:{
    color: 'rgb(255,255,255, 0.6)',
    display: 'table',
    width: '100%',
  },
  certListItems:{
    display: 'table-cell',
    width: '33.33%',
  },
  certListItems2:{
    display: 'table-cell',
    width: '33.33%',
    paddingLeft: 50,
  }
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
        <section>
            <div className={classes.root}>
                <h1 className={classes.header}><BuildIcon/> Skills</h1>
                <ul className={classes.skillsList}>
                    <li className={classes.skillsListItems}>JavaScript</li>
                    <li className={classes.skillsListItems}>HTML</li>
                    <li className={classes.skillsListItems}>React</li>
                    <li className={classes.skillsListItems}>jQuery</li>
                    <li className={classes.skillsListItems}>Axios</li>
                </ul>
                <ul className={classes.skillsList}>
                    <li className={classes.skillsListItems}>Express</li>
                    <li className={classes.skillsListItems}>Python</li>
                    <li className={classes.skillsListItems}>CSS</li>
                    <li className={classes.skillsListItems}>Jest</li>
                    <li className={classes.skillsListItems}>PostgreSQL</li>
                </ul>
                <ul className={classes.skillsList}>
                    <li className={classes.skillsListItems}>Redux</li>
                    <li className={classes.skillsListItems}>Redux-Saga</li>
                    <li className={classes.skillsListItems}>Node.js</li>
                    <li className={classes.skillsListItems}>Flask</li>
                    <li className={classes.skillsListItems}>Psycopg2</li>
                </ul>
                <ul className={classes.skillsList}>
                    <li className={classes.skillsListItems}>Passport</li>
                    <li className={classes.skillsListItems}>Postman</li>
                    <li className={classes.skillsListItems}>MongoDB</li>
                    <li className={classes.skillsListItems}>Bootstrap</li>
                    <li className={classes.skillsListItems}>Material-UI</li>
                </ul>

                <h1 className={classes.header}><CheckIcon/> Certifications</h1>
                <ul className={classes.certList}>
                    <li className={classes.certListItems}>Massachusetts Initial Teacher Licensure in Biology: Grades 5-12</li>
                    <li className={classes.certListItems2}>MTEL: Communication and Literacy</li>
                    <li className={classes.certListItems}>Sheltered English Immersion Endorsement</li>
                </ul>
                <ul className={classes.certList}>
                <li className={classes.certListItems}>Minnesota Standard Teaching License in Life Science: Grades 9-12</li>
                <li className={classes.certListItems2}>MTEL: Biology</li>
                <li className={classes.certListItems}></li>
                </ul>

                <h1 className={classes.header}><SchoolIcon/> Education</h1>
                <div>
                <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} className={classes.expansion}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore}/>}>
                    <Typography className={classes.heading}>Full Stack Software Engineering</Typography>
                    <Typography className={classes.secondaryHeading}>Prime Digital Academy</Typography>
                    <Typography className={classes.typographyDate}>
                    June 2019
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Full Stack Engineering Certificate</li>
                    </ul>
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel2'} onChange={this.handleChange('panel2')} className={classes.expansion}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Master of Education</Typography>
                    <Typography className={classes.secondaryHeading}>
                    University of Massachusetts Amherst
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    May 2016
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Year-long immersion, urban teacher preparation program in which candidates receive a master’s degree and initial Massachusetts teacher licensure</li>
                    </ul>
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel3'} onChange={this.handleChange('panel3')} className={classes.expansion}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Bachelor of Science</Typography>
                    <Typography className={classes.secondaryHeading}>
                    University of Massachusetts Amherst
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    May 2013
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Major: Psychology</li>
                        <li>Minor: Biology</li>
                        <li>Minor: Anthropology</li>
                    </ul>
                    </Typography>
                </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>

                <h1 className={classes.header}><WorkIcon/> Experience</h1>
                <ExpansionPanel expanded={expanded === 'panel4'} onChange={this.handleChange('panel4')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore}/>}>
                    <Typography className={classes.heading}>Full Stack Web Development Student </Typography>
                    <Typography className={classes.secondaryHeading}>Prime Digital Academy</Typography>
                    <Typography className={classes.typographyDate}>
                    January 2019 - June 2019
                    </Typography>
                    </ExpansionPanelSummary>

                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <h4><i>Solo Project: ActivatEd</i></h4>
                        <li>Web based application designed with the ability for educators to build courses, add students to courses, and create course specific activators/Do-Now questions</li>
                        <li>Activators are released for student access at teacher specified start and end time; upon completion of questions, student responses are stored for teachers to access and score via their account</li>
                        <li>ActivatEd is built using the following technologies: HTML, JavaScript, Axios, Express, Node.js, Passport, Pg, React, React-redux, React-saga, Material-UI, CSS, SQL, Moment.js</li>
                        <h4><i>Group Project: TBD</i></h4>

                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel5'} onChange={this.handleChange('panel5')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Biology Teacher</Typography>
                    <Typography className={classes.secondaryHeading}>
                        High School of Science and Technology
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    August 2016 - August 2018
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Served as Team Leader for 10th grade teachers; responsible for two-way communication between teachers and parents, counselors, special education liaisons, and community support systems to assist student academic improvement</li>
                        <li>Sole creator of biology curriculum unit reviews as grade recovery aimed to provide supplemental instruction and alternative grading for struggling students </li>
                        <li>Trained in Student Teacher Assistance Team protocol to address social, emotional and behavioral interventions</li>
                        <li>Modified and varied instructional practices based on Individual Education Plans and English Language Learners and developed assessments with focus on differentiated learning</li>

                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel6'} onChange={this.handleChange('panel6')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Clinical Teacher</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Springfield Central High School
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    January 2016 - June 2016
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Full responsibility of two tenth grade biology classes and co-taught AP Psychology in a Science, Technology, Engineering, Arts, Advanced Study and Mathematics Magnet School</li>
                        <li>Completed an academic year-long 3D Printing 4 Learning- Community of Practice Workshop</li>
                        <li>Supervised and served as a faculty member for the Central High School Relay for Life Team as a legacy project; brainstormed fundraising ideas, recruited members and oversaw event scheduling and planning.</li>
                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel7'} onChange={this.handleChange('panel7')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Student Teacher</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Springfield Central High School
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    September 2015 - January 2016
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Worked closely with mentor teacher to develop units of study </li>
                        <li>Collaborated with colleagues to gain insight into instructional practices.</li>
                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel8'} onChange={this.handleChange('panel8')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Special Education Paraprofessional</Typography>
                    <Typography className={classes.secondaryHeading}>
                        Amherst-Pelham Regional Middle School
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    January 2015 - June 2015
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Provided social cognitive, emotional, behavioral and academic support to students diagnosed on the autism spectrum or with similar neurological profiles</li>
                        <li>Implemented positive behavioral intervention programs as well as de-escalation strategies</li>
                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel9'} onChange={this.handleChange('panel9')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Child Development Intern</Typography>
                    <Typography className={classes.secondaryHeading}>
                        The May Institute
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    December 2012 - May 2013
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Introduced to Applied Behavior Analysis</li>
                        <li>Implemented basic discrete trials and was responsible for data entry</li>
                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel10'} onChange={this.handleChange('panel10')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Research Assistant</Typography>
                    <Typography className={classes.secondaryHeading}>
                        University of Massachusetts Amherst
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    January 2012 - May 2013
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Assisted data collection, entry, coding, and basic data analysis</li>
                        <li>Responsible to run individual sessions with clients</li>
                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel expanded={expanded === 'panel11'} onChange={this.handleChange('panel11')} className={classes.expansion}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.expandMore} />}>
                    <Typography className={classes.heading}>Teaching Assistant</Typography>
                    <Typography className={classes.secondaryHeading}>
                        University of Massachusetts Amherst
                    </Typography>
                    <Typography className={classes.typographyDate}>
                    September 2012 - December 2012
                    </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography className={classes.typographySummary}>
                    <ul>
                        <li>Attended all lectures and weekly meetings with professor</li>
                        <li>Taught two mandatory discussion groups and was responsible for grading student in-classwork, weekly quizzes and unit exams </li>
                        <li>Conducted library research and held scheduled office hours</li>
                    </ul>
                    </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                </div>
            </section>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);