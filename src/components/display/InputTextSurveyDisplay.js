import React from "react";
import 'survey-react/survey.css'
import InputTextSurveyGenerator from '../surveyType/InputTextSurveyGenerator'

const InputTextSurveyDisplay = (questions) => {
	console.log(questions)
	// if (questions !== null){
		return(
			<InputTextSurveyGenerator questions = {questions.questions}/>
		)
	// }
	// else{
	// 	return(
	// 		<InputTextSurveyGenerator />
	// 	)
	// }
	
}

export default InputTextSurveyDisplay 