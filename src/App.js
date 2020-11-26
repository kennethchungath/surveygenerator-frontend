import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputTextSurvey from './survey/InputTextSurvey'
import InputTextSurveyDisplay from './display/InputTextSurveyDisplay'
import Navigationbar from './components/Navbar'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

const App = () => {
  // const[displaySurvey, setDisplaySurvey] = useState(true)
  return (
    // <Router>
    // <div>
    // <Navigationbar />

  	// <Switch>
    //   <Route path="/surveyinput" component={InputTextSurvey} />
    //   <Route path="/survey" component={InputTextSurveyDisplay} />
    // </Switch>
    // </div>
    // </Router>
    <InputTextSurvey />
  )
}
export default App;
