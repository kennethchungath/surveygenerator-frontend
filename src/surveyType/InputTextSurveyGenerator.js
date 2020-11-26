import React, { useState } from "react";
import * as Survey from 'survey-react';
import 'survey-react/survey.css'
import json from '../JSONSchema/InputTextJSON'

const InputTextSurveyGenerator = ({questions}) => {
	const [answers, setAnswers] = useState()
	// console.log(questions)

	// console.log(json);

	json.pages[0].title = questions[0];
	var i;
	var j = 0;
	for (i = 1; i < questions.length; i++){
		if (questions[i] !== "") {
			json.pages[0].elements[j].name = questions[i];
			json.pages[0].elements[j].visible = true
		}
		j++

	}
	function setAnswersFunct(data){
		// console.log(data.valuesHash);
		if (data !== null){
			setAnswers(data.valuesHash)
			setAnswers((state) => {
				//console.log(state)
				test(state);
				return state;
			});

		}
		
	}
	function test(temp){
		console.log(temp)
	}

	return(
		<Survey.Survey
		 json = {json}
		 onComplete = {data => setAnswersFunct(data)}

		 />
	)
}

export default InputTextSurveyGenerator