import React, { useState } from 'react';
import QUESTIONS from '../questions'

const Quiz = () => {
    const [reponses, setReponses] = useState([]);
    const currentQuestion = reponses.length;
    const HandleSelectAnswer = (answer) => {
        setReponses(prev => ([...prev, answer]))
    }
    return (
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[currentQuestion].text}</h2>
                <ul id="answers">
                    {QUESTIONS[currentQuestion].answers.map(qst => (
                        <li key={qst} className="answer">
                            <button onClick={() => { HandleSelectAnswer(qst) }}>{qst}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default Quiz;