import React, { useState } from 'react';
import QUESTIONS from '../questions'

const Quiz = () => {
    const [reponses, setReponses] = useState([]);
    const currentQuestion = reponses.length;
    return (
        <div id="question">
            <h2>{QUESTIONS[currentQuestion].text}</h2>
            <ul id="answers">
                {QUESTIONS[currentQuestion].answers.map(qst => (
                    <li key={qst} className="answer">
                        <button>{qst}</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Quiz;