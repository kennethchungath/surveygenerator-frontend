import React from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap/';
import {
	Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import InputTextSurveyDisplay from '../display/InputTextSurveyDisplay'


const Navigationbar = () => {


	return(
		<div>
	<Navbar bg="primary" variant="dark">
		<Navbar.Brand href="#home">SurveyGenerator</Navbar.Brand>
		<Nav className="mr-auto">
		<Nav.Link href="#surveyinput">Survey Input</Nav.Link>
		<Nav.Link href="#survey">Survey</Nav.Link>
		{/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
		</Nav>
    </Navbar>
		</div>
	)

}

export default Navigationbar