import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions';
import completed from "../assets/quiz-complete.png";
import Question from './Question';

const Quiz = () => {
    const [reponses, setReponses] = useState([]);
    const [answerState, setAnswerState] = useState("")
    const currentQuestion = answerState === "" ? reponses.length : reponses.length - 1;

    const handleSelectAnswer = useCallback((answer) => {
        setReponses(prev => ([...prev, answer]));
        setAnswerState("selected")
        setTimeout(() => {
            if (answer === QUESTIONS[currentQuestion].answers[0]) {
                setAnswerState("correct");
            }
            else { setAnswerState("wrong"); }
            setTimeout(() => {
                setAnswerState("")
            }, 2000);
        }, 1000)
        console.log(answerState)
    }, [currentQuestion]);
    const onTimeOut = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    const quizIsComplete = (reponses.length === QUESTIONS.length);
    console.log(quizIsComplete);

    return (
        <>
            {quizIsComplete ?
                <div id="summary">
                    <img src={completed} alt="Quiz Completed!" />
                    <h2>Quiz Completed!</h2>
                </div>
                :
                <div id="quiz">
                    <Question
                        QUESTIONS={QUESTIONS}
                        onTimeOut={onTimeOut}
                        currentQuestion={currentQuestion}
                        reponses={reponses}
                        handleSelectAnswer={handleSelectAnswer}
                        answerState={answerState}
                        key={QUESTIONS[currentQuestion]?.text}
                    />
                </div>
            }
        </>
    );
};

export default Quiz;
