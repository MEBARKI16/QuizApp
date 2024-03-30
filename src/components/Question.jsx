import React from 'react'
import QuestionTimer from './QuestionTimer';
import QUESTIONS from "../questions"
import Answers from './Answers';
import { useState } from 'react';
const Question = ({ onTimeOut, currentQuestion, onSelectAnswer }) => {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    })
    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })
        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[currentQuestion].answers[0] === answer
            })
            setTimeout(() => {
                onSelectAnswer(answer)
            }, 2000)
        }, 1000)
    }
    let answerState = '';
    if (answer.selectedAnswer && answer.isCorrect != null) {
        answerState = answer.isCorrect ? "correct" : "wrong"
        console.log(answerState)
    }
    else if (answer.selectedAnswer) {
        answerState = "selected"
    }
    return (
        <div id="question">
            <QuestionTimer timeOut={10000} onTimeOut={onTimeOut} />
            <h2>{QUESTIONS[currentQuestion].text}</h2>
            <Answers
                reponse={answer.selectedAnswer}
                handleSelectAnswer={handleSelectAnswer}
                answerState={answerState}
                answers={QUESTIONS[currentQuestion].answers}
            />
        </div>
    )
}

export default Question;