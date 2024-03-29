import React from 'react'
import QuestionTimer from './QuestionTimer';
import Answers from './Answers';
const Question = ({ QUESTIONS, onTimeOut, currentQuestion, reponses, handleSelectAnswer, answerState }) => {
    return (
        <div id="question">
            <QuestionTimer timeOut={10000} onTimeOut={onTimeOut} />
            <h2>{QUESTIONS[currentQuestion]?.text}</h2>
            <Answers
                reponses={reponses}
                handleSelectAnswer={handleSelectAnswer}
                answerState={answerState}
                answers={QUESTIONS[currentQuestion].answers}
            />
        </div>
    )
}

export default Question;