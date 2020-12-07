import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap/';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InputTextSurvey from './components/survey/InputTextSurvey'
import InputTextSurveyDisplay from './components/display/InputTextSurveyDisplay'
import Navigationbar from './components/Navbar'
import Routes from "./routes";
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";

import './App.css'
import Login from "./components/pages/login";
import SignUp from "./components/pages/register";
const App = () => {
  return (
    <Router>
      <div>
        {/* <InputTextSurvey/> */}
        {/* <Navigationbar /> */}

        {/* <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div> */}

      {/* <Routes /> */}

      
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/surveyinput" component={InputTextSurvey} />
          </Switch>

      </div>
    </Router>
    
  )
}
export default App;
