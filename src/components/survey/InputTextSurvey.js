import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputTextJSON from '../JSONSchema/InputTextJSON'
import InputTextSurveyDisplay from '../display/InputTextSurveyDisplay'
import InputTextSurveyGenerator from '../surveyType/InputTextSurveyGenerator'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const axios = require('axios')

const InputTextSurvey = () => {
	const[title, setTitle] = useState();
	const [q1, setQ1] = useState('');
	const [q2, setQ2] = useState('');
	const [q3, setQ3] = useState('');
	const [q4, setQ4] = useState('');
	const [q5, setQ5] = useState('');
	const [q6, setQ6] = useState('');
	const [q7, setQ7] = useState('');
	const [q8, setQ8] = useState('');
	const [q9, setQ9] = useState('');
  const [q10, setQ10] = useState('');
  const[displaySurvey, setDisplaySurvey] = useState(true)
  const questions = [title, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

  const PassValues = () => {
    console.log(questions);
    // <InputTextSurveyGenerator questions = {questions}/>
    setDisplaySurvey(displaySurvey => !displaySurvey)
    // window.open("/survey");
    // axios.post('https:sample-endpoint.com/user', {
    //   Title: title,
    //   Q1 : q1,
    //   Q2 : q2,
    //   Q3 : q3,
    //   Q4 : q4,
    //   Q5 : q5,
    //   Q6 : q6,
    //   Q7 : q7,
    //   Q8 : q8,
    //   Q9 : q9,
    //   Q10 : q10,
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
        
  };

  // <Router>
  //     <Route exact path="/survey" component={InputTextSurveyDisplay} />
  // </Router>

  return (      
   <div>
      {displaySurvey && <Form onSubmit = {PassValues}>
		<Form.Group controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter survey title"  
        onChange={event => setTitle(event.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 1</Form.Label>
        <Form.Control type="text" placeholder="Enter question 1"  
        onChange={event => setQ1(event.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 2</Form.Label>
        <Form.Control type="text" placeholder="Enter question 2"
        onChange={event => setQ2(event.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 3</Form.Label>
        <Form.Control type="text" placeholder="Enter question 3" 
        onChange={event => setQ3(event.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 4</Form.Label>
        <Form.Control type="text" placeholder="Enter question 4" 
        onChange={event => setQ4(event.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 5</Form.Label>
        <Form.Control type="text" placeholder="Enter question 5" 
        onChange={event => setQ5(event.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 6</Form.Label>
        <Form.Control type="text" placeholder="Enter question 6"
        onChange={event => setQ6(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 7</Form.Label>
        <Form.Control type="text" placeholder="Enter question 7"
        onChange={event => setQ7(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 8</Form.Label>
        <Form.Control type="text" placeholder="Enter question 8"
        onChange={event => setQ8(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 9</Form.Label>
        <Form.Control type="text" placeholder="Enter question 9"
        onChange={event => setQ9(event.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicText">
        <Form.Label>Question 10</Form.Label>
        <Form.Control type="text" placeholder="Enter question 10" 
        onChange={event => setQ10(event.target.value)}/>
      </Form.Group>

      
    <Button variant="primary" type = "submit">
        Submit  
      </Button>
  </Form> }
  {
    !displaySurvey && <InputTextSurveyDisplay questions = {questions}/>
  }
  </div> 
  )
}

export default InputTextSurvey