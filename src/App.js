import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Questions from './components/Questions'
import Results from './components/Results'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

const useStyles = makeStyles({
  appBar: {
    position: 'relative',
  }
});

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            GistMD
          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <Route exact path="/" render={() => <Questions />}/>
        <Route exact path="/patient/:id" render={({ match }) => <Results match={match}/>}/>
      </Router>
    </>
  );
}

export default App;
