import React, { useState } from 'react';
import QUESTIONS from '../questions';
import completed from "../assets/quiz-complete.png";

const Quiz = () => {
    const [reponses, setReponses] = useState([]);
    const currentQuestion = reponses.length;
    const newTab = QUESTIONS[currentQuestion]?.answers
    ? [...QUESTIONS[currentQuestion].answers].sort(() => Math.random() - 0.5)
    : [];
  

    const handleSelectAnswer = (answer) => {
        setReponses(prev => ([...prev, answer]));
    };

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
                    <div id="question">
                        <h2>{QUESTIONS[currentQuestion]?.text}</h2>
                        <ul id="answers">
                            {newTab.map((qst, index) => (
                                <li key={index} className="answer">
                                    <button onClick={() => handleSelectAnswer(qst)}>{qst}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    );
};

export default Quiz;
