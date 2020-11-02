import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Inputs from './Inputs';
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    layout: {
      width: 'auto',
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      textAlign: "center",
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    stepper: {
      padding: theme.spacing(3, 0, 5),
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
  }));
  
const steps = ['Gender', 'Age', 'Language', 'Operation'];  

const Questions = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [gender, setGender] = React.useState('female');
    const [age, setAge] = React.useState('');
    const [operation, setOperation] = React.useState('');
    const [language, setLanguage] = React.useState('');
    const history = useHistory()

    const getStepContent = step => {
        switch (step) {
          case 0:
            return <Inputs value={gender} onChange={handleGenderChange} question="gender"/>;
          case 1:
            return <Inputs value={age} onChange={handleAgeChange} question="age"/>;
          case 2:
            return <Inputs value={language} onChange={handleLangChange} question="language"/>;
          case 3:
            return <Inputs value ={operation} onChange={handleOperationChange} question="operation"/>;
          default:
            return null;
        }
      }

      const handleGenderChange = ({ target }) => {
        setGender(target.value);
      };
  
      const handleAgeChange = ({ target }) => {
          setAge(target.value);
      };
  
      const handleOperationChange = ({ target }) => {
      setOperation(target.value);
      };
  
      const handleLangChange = ({ target }) => {
      setLanguage(target.value);
      };    
  
    const handleNext = async (event) => {
      setActiveStep(activeStep + 1);
      if(event.target.innerText === "SUBMIT") {
        const body = {gender, age, language, operation};
        const patient = await axios.post("http://localhost:5000/patient", body);
        history.push(`/patient/${patient.data._id}`)
      }
    };
  
    const handleBack = () => {
      setActiveStep(activeStep - 1);
    };
  
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Patient Information
            </Typography>
            <Stepper orientation="vertical" activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                    Back
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
                </div>
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );  
}

export default Questions;