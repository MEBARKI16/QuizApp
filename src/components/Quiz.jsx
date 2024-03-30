import React, { useCallback, useState } from 'react';
import QUESTIONS from '../questions';
import completed from "../assets/quiz-complete.png";
import Question from './Question';

const Quiz = () => {
    const [reponses, setReponses] = useState([]);
    const currentQuestion = reponses.length;

    const onSelectAnswer = useCallback((answer) => {
        setReponses(prev => ([...prev, answer]));
    }, []);
    const onTimeOut = useCallback(() => onSelectAnswer(null), [onSelectAnswer])
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
                        onTimeOut={onTimeOut}
                        currentQuestion={currentQuestion}
                        onSelectAnswer={onSelectAnswer}
                        key={currentQuestion}
                    />
                </div>
            }
        </>
    );
};

export default Quiz;
