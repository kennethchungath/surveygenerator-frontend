import React, {useState} from 'react'
import {Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap/';
import {
	Router,
	Switch,
	Route,
	Link
  } from "react-router-dom";
import InputTextSurveyDisplay from './display/InputTextSurveyDisplay'
import LogOut from './pages/LogOut'

const Navigationbar = (email) => {
	const [loggedin, setLoggedin] = useState(true)
	console.log(email.email)
	return(
		<div>
		{loggedin &&<Navbar bg="primary" variant="dark">
			<Navbar.Brand href="/">SurveyGenerator</Navbar.Brand>
			<Nav className="mr-auto">
			<Nav.Link href="/surveyinput">Survey Input</Nav.Link>
			<Nav.Link href="/survey">Survey</Nav.Link>
			{/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
			</Nav>
			<Form inline>
				<Form.Label style = {{color: "white"}}>Welcome {email.email},</Form.Label>
				
				<Button variant="primary" onClick = {() => setLoggedin(false)}>Logout</Button>
				{/* <Nav classman = "mr-auto">
					<Nav.Link href="/">Log Out</Nav.Link>
				</Nav> */}
			</Form>
		</Navbar>}
		
		{
			!loggedin && <LogOut />
		}
		</div>
	)

}

export default Navigationbar