import React from "react";
import 'survey-react/survey.css'
import InputTextSurveyGenerator from '../surveyType/InputTextSurveyGenerator'

const InputTextSurveyDisplay = (questions) => {
	// console.log(questions)
	return(
		<InputTextSurveyGenerator questions = {questions.questions}/>
	)
}

export default InputTextSurveyDisplay 